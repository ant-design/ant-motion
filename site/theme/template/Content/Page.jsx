import React from 'react';
import PropTypes from 'prop-types';
import { TweenOneGroup } from 'rc-tween-one';
import { Link } from 'react-router';
import { Affix, Row, Col, Menu } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import MobileMenu from 'rc-drawer';
import nav from '../Layout/nav';
import { scrollClick, getMenuItems, getLocalizedPathname } from '../utils';

const { SubMenu, Item, ItemGroup } = Menu;

const title = {};
nav.forEach((item) => {
  title[item.key] = item.name;
});

function fileNameToPath(filename) {
  const snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').split('/');
  return snippets[snippets.length - 1];
}

class Page extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    pathname: PropTypes.string,
    isMobile: PropTypes.bool,
    localizedPageData: PropTypes.any,
    hash: PropTypes.any,
    children: PropTypes.any,
    intl: PropTypes.object,
  };

  static defaultProps = {
    className: 'page',
  };

  constructor(props) {
    super(props);
    this.state = {
      isHash: false,
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
    this.enter = true;
  }

  componentDidUpdate() {
    this.hash = null;
    this.state.isHash = false;
    const props = this.props;
    const pathNames = props.pathname.split('/');
    const isComponent = pathNames[0] === 'components';
    if (isComponent) {
      if (window.addEventListener) {
        window.addEventListener('scroll', this.onScroll);
      } else {
        window.attachEvent('onscroll', this.onScroll);
      }
    } else {
      this.componentWillUnmount();
    }
  }

  componentWillUnmount() {
    this.hash = null;
    if (window.addEventListener) {
      window.removeEventListener('scroll', this.onScroll);
    } else {
      window.detachEvent('onscroll', this.onScroll);
    }
  }

  onScroll = () => {
    if (this.hash !== window.location.hash) {
      this.hash = window.location.hash;
      this.setState({
        isHash: true,
      });
    }
  }

  getModuleData = (props, isDemo) => {
    const pathname = props.location.pathname;

    const moduleName = pathname.split('/').filter((item) => item).slice(0, -1).join('/');

    const moduleData = isDemo
      ? Object.keys(props.demos).map((k) => ({ meta: props.demos[k].meta }))
        .sort((a, b) => a.meta.order - b.meta.order)
      : props.picked[moduleName];
    const excludedSuffix = this.props.intl.locale === 'zh-CN' ? 'en-US.md' : 'zh-CN.md';
    return moduleData.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix));
  };


  getMenuItems(moduleData, pathNames, isComponent, isNav) {
    if (!moduleData) {
      return null;
    }
    const menuData = getMenuItems(moduleData.filter((item) => !item.meta.hidden), this.props.intl.locale);

    this.openKeys = [];
    return menuData.map((menuItem) => {
      if (!menuItem.children) {
        return this.generateMenuItem(menuItem, pathNames, isComponent, isNav, menuData.length);
      }
      this.openKeys.push(menuItem.title);
      return (
        <SubMenu title={<h4>{menuItem.title}</h4>} key={menuItem.title}>
          {menuItem.children.map((child) => {
            if (child.type === 'type') {
              return (
                <ItemGroup title={child.title} key={child.title}>
                  {child.children.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
                    .map((leaf) => this.generateMenuItem(
                      leaf, pathNames,
                      isComponent, isNav, menuData.length
                    ))}
                </ItemGroup>
              );
            }
            return this.generateMenuItem(child, pathNames, isComponent, isNav, menuData.length);
          })}
        </SubMenu>
      );
    });
  }

  getListChildren = (cPathNames, cModuleData, isComponent) => {
    const {
      isMobile, hash, pathname,
    } = this.props;
    const pathNames = cPathNames;
    // Ａpi页面, 地址转成 components;
    const isApi = pathNames[0] === 'api';
    pathNames[0] = pathNames[0] === 'api' ? 'components' : pathNames[0];
    const componentBool = isComponent && !isMobile;

    const moduleData = componentBool
      ? this.getModuleData(this.props, true)
      : cModuleData;
    const listToRender = moduleData && this.getMenuItems(
      moduleData, componentBool ? hash : pathNames, componentBool
    );

    const listKey = pathNames[0] === 'components' && !pathname.match('api')
      ? pathname : pathNames[0];
    const getHashActive = () => {
      const hashArray = this.hash.replace('#', '').split('-demo-');
      return hashArray[1] || '';
    };
    const activeMenuItem = this.state.isHash ? getHashActive() : pathNames[1];
    const menu = (
      <Menu
        key={listKey}
        inlineIndent="16"
        mode="inline"
        defaultOpenKeys={this.openKeys}
        selectedKeys={[activeMenuItem.replace('-cn', '')]}
      >
        {listToRender}
      </Menu>
    );
    return (!isMobile ? (listToRender && (
      <Affix offsetTop={60} key="list" className="nav-list-wrapper">
        <TweenOneGroup
          enter={{ y: 30, type: 'from', opacity: 0 }}
          leave={{ y: -30, opacity: 0 }}
          className="nav-list"
        >

          <h2 key={`${pathname.split('/')[0]}-title`}>
            {isComponent ? <FormattedMessage id="app.content.components-exp" /> : title[pathNames[0]]}
          </h2>
          {menu}
        </TweenOneGroup>
      </Affix>
    ))
      : (
        <MobileMenu width={180}>
          <div className="nav-list-wrapper">
            <div className="nav-list">
              <h2 key={`${pathname.split('/')[0]}-title`}>
                {isApi ? 'API' : title[pathNames[0]]}
              </h2>
              {menu}
            </div>
          </div>
        </MobileMenu>
      ));
  }

  generateMenuItem = (meta, pathNames, isComponent, isNav, length) => {
    const { locale } = this.props.intl;
    let link = meta.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '');
    // const path = Array.isArray(pathNames) ? pathNames.join('/') : pathNames.replace('#', '');
    // const hash = this.state.isHash && this.hash.replace('#', '');
    const key = fileNameToPath(meta.filename);
    /* const className = hash === meta.id || path === link ||
      (!hash && ((!path && i === 0) || path === meta.id)) ? 'active' : ''; */
    // api 页面，链接把 components 转成 api
    link = getLocalizedPathname(this.props.pathname.match('api')
      ? link.replace('components', 'api') : link, locale === 'zh-CN');
    const name = meta.title[locale] || meta.title;
    const child = isNav ? name : <span>{name}</span>;
    // console.log(link, link.split('/')[1], pathNames[1]);
    let linkToChildren = link.split('/')[2] === pathNames[1]
      ? (
        <a>
          {child}
        </a>
      )
      : (
        <Link to={link}>
          {child}
        </Link>
      );
    linkToChildren = isComponent
      ? (
        <a href={`#${meta.id}`} onClick={this.cScrollClick}>
          {name}
        </a>
      ) : linkToChildren;
    if (isNav) {
      const className = pathNames[1].replace('-cn', '') === key ? 'active' : '';
      return (
        <li
          key={key}
          className={className}
          disabled={meta.disabled}
          style={{ width: `${100 / length}%` }}
        >
          {linkToChildren}
        </li>
      );
    }
    return (
      <Item
        key={key}
        // className={className}
        disabled={meta.disabled}
      >
        {linkToChildren}
      </Item>
    );
  }

  cScrollClick = (e) => {
    e.preventDefault();
    scrollClick(e);
  };

  render() {
    const {
      className, pathname, isMobile, localizedPageData: pageData, children, demos, intl,
    } = this.props;
    const pathNames = pathname.split('/');
    const isComponent = pathNames[0] === 'components';
    const moduleData = this.getModuleData(this.props);
    const navToRender = isComponent && !isMobile
      ? this.getMenuItems(moduleData, pathNames, false, true) : null;
    const listToRender = this.getListChildren(pathNames, moduleData, isComponent);
    const childrenToRender = React.cloneElement(children, {
      pageData,
      demos,
      intl,
    });
    return (
      <div className={`${className}-wrapper`}>
        {!isMobile && (
          <TweenOneGroup
            enter={{ height: 0, type: 'from', ease: 'easeInOutCubic' }}
            leave={{ height: 0, ease: 'easeInOutCubic' }}
            component=""
          >
            {navToRender && (
              <div key="nav" className={`${className}-nav`}>
                <ul>
                  {navToRender}
                </ul>
              </div>
            )}
          </TweenOneGroup>
        )}
        <TweenOneGroup
          enter={{
            y: 30,
            type: 'from',
            opacity: 0,
            onComplete: (e) => {
              const { target } = { ...e };
              target.style.cssText = '';
            },
          }}
          leave={{ y: -30, opacity: 0 }}
          className={className}
          component={Row}
        >
          <Col key="list" lg={4} md={5} sm={0} xs={0}>
            {listToRender}
          </Col>
          <Col
            lg={20}
            md={19}
            sm={24}
            xs={24}
            key="content"
            className={`${className}-content-wrapper`}
          >
            <TweenOneGroup
              enter={{ y: 30, type: 'from', opacity: 0 }}
              leave={{ y: -30, opacity: 0 }}
              className={`${className}-content`}
              style={{ minHeight: this.state.minHeight }}
            >
              <div key={pathname}>{childrenToRender}</div>
            </TweenOneGroup>
          </Col>
        </TweenOneGroup>
      </div>
    );
  }
}
export default injectIntl(Page);
