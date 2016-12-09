import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import './index.less';

const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    delete props.dataSource;
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    const navData = dataSource[`${name}_menu`].children;
    const navChildren = Object.keys(navData).map(key => (<Item key={key}>
      {navData[key]}
    </Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
      style={dataSource[name].style}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
        style={dataSource[`${name}_logo`].style}
      >
        <img width="100%" src={dataSource[`${name}_logo`].children} />
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-user`}
        animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
        style={dataSource[`${name}_user`].style}
        id={`${this.props.id}-user`}
      >
        <a href="" className="help">
          <Icon type="question-circle-o" />
          <span>帮助</span>
        </a>
        <a href="" className="user">
          <span className="img">
            <img
              src="https://zos.alipayobjects.com/rmsportal/iXsgowFDTJtGpZM.png"
              width="30"
              height="30"
            />
          </span>
          <span>用户名</span>
        </a>
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['a']}
          style={dataSource[`${name}_menu`].style}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
