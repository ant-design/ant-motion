import React from 'react';
import ReactDOM from 'react-dom';
import webData from './../template.config.js';
import { TweenOneGroup } from 'rc-tween-one';
import { scrollScreen } from 'rc-scroll-anim';
import OverLay from './components/OverLay';
import Mask from './components/Mask';
import NavController from './components/NavController';
import TextController from './components/TextController';
import { getURLData, mergeURLDataToConfig } from './utils';

export default class Templates extends React.Component {

  constructor() {
    super(...arguments);
    this.navAttrHeight = null;
    this.scrollScreen = false;
    this.listPoint = false;
    this.configURL = null;
    this.state = {
      overlay: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        children: '',
      },
      enterKey: null,
      currentKey: null,
    };
  }

  componentDidMount() {
    if (this.scrollScreen) {
      const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      scrollScreen.init({ docHeight });
    }
    if (this.listPoint) {
      const list = ReactDOM.findDOMNode(this.refs.list);
      const listHeight = list.getBoundingClientRect().height;
      list.style = `margin-top: -${listHeight / 2}px`
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.showMask) {
      // maskChild 的位置需要把数据 set 后再去获取。。。所以用 setState 的 callback;
      this.setState({}, () => {
        const dom = $(ReactDOM.findDOMNode(this.refs[this.state.currentKey]));
        this.setState({
          overlay: {
            top: dom.offset().top,
            left: dom.offset().left,
            width: dom.outerWidth(),
            height: dom.outerHeight(),
          },
        });
      });
    }
  }

  getChildrenProps = (data, attrHeightBool) => {
    if (!data) {
      return {};
    }
    const styleArray = data.filter(item => item.the === 'style');
    const contentArray = data.filter(item => !(item.the === 'style'));
    const style = {};
    styleArray.forEach(item => {
      style[item.key] = item.value;
      // 判断导航下一屏的高度；
      if (item.key === 'height' && attrHeightBool) {
        this.navAttrHeight = item.value;
      }
    });
    if (this.navAttrHeight && !attrHeightBool) {
      if (style.height.match(/[%|em]/g)) {
        style.height = `calc(${style.height} - ${parseFloat(this.navAttrHeight)}px)`;
      } else {
        style.height = `${parseFloat(style.height) - parseFloat(this.navAttrHeight)}px`
      }
      this.navAttrHeight = null;
    }
    const dataSource = {};
    contentArray.forEach(item => {
      dataSource[item.key] = {};
      Object.keys(item.value).forEach(key => {
        dataSource[item.key][key] = item.value[key].value;
      });
    });
    return { style, dataSource };
  };

  onMouseEnter = (key, e) => {

    if (!this.state.currentKey) {
      const dom = $(e.currentTarget);
      this.setState({
        enterKey: key,
        overlay: {
          top: dom.offset().top,
          left: dom.offset().left,
          width: dom.outerWidth(),
          height: dom.outerHeight(),
        },
      });
    }
  };

  onMouseLeave = () => {
    const make = getURLData('make');
    const mode = getURLData('mode');
    if (make || mode) {
      return;
    }
    if (!this.state.currentKey) {
      this.setState({
        enterKey: null,
      });
    }
  };

  onDoubleClick = (key, e) => {
    const make = getURLData('make');
    const mode = getURLData('mode');
    if (make || mode) {
      return;
    }
    // 禁止滚动;
    if (this.state.showMask) {
      $('html').attr('style', '');
      this.config = {};
    } else {
      $('html').css({ overflow: 'hidden' });
    }
    const dom = $(e.currentTarget);
    this.setState({
      showMask: !this.state.showMask,
      currentKey: this.state.currentKey ? null : key,
      enterKey: key,
      overlay: {
        top: dom.offset().top,
        left: dom.offset().left,
        width: dom.outerWidth(),
        height: dom.outerHeight(),
      },
    });
  };

  getTemplatesToChildren = () => {
    let isNav;
    const data = (getURLData('t', this.props.location.hash) || '').split(',');
    const other = (getURLData('o', this.props.location.hash) || '').split(',');
    this.configURL = JSON.parse(getURLData('c') || '{}');
    this.config = mergeURLDataToConfig(webData, this.configURL);
    const children = data.map((item, i) => {
      const dataArr = item.split('_');
      const varsData = this.config[dataArr[0]].data[dataArr[1]];
      isNav = dataArr[0] === 'nav';
      const Component = varsData.component;
      if (!Component) {
        return;
      }
      const props = this.getChildrenProps(varsData.dataSource,
        isNav && !(other.indexOf('fixed') >= 0));
      if (isNav && other.indexOf('fixed') >= 0) {
        props.style = props.style || {};
        props.style.position = 'fixed';
      }
      props.onMouseEnter = this.onMouseEnter.bind(this, item);
      props.onMouseLeave = this.onMouseLeave.bind(this, item);
      props.onDoubleClick = this.onDoubleClick.bind(this, item);
      return React.createElement(Component, { key: i, name: item, ref: item, ...props });
    });
    // 判断其它里的；
    other.map(item => {
      switch (item) {
        case 'fixed':
        {
          return;
        }
        case 'point':
        {
          const Point = require('./other/Point');
          this.listPoint = true;
          children.push(<Point key="list" data={data} ref="list" />);
          break;
        }
        case 'full':
        {
          this.scrollScreen = true;
          break;
        }
      }
    });
    return children;
  };

  onMaskClose = () => {
    $('html').attr('style', '');
    this.setState({
      showMask: false,
      currentKey: null,
    });
  };

  render() {
    const make = getURLData('make');
    const mode = getURLData('mode');
    const { overlay, currentKey, enterKey, showMask } = this.state;
    const children = this.getTemplatesToChildren();
    if (make) {
      return (<div className="templates-wrapper">
        {children}
      </div>)
    }
    let data;
    let key;
    if (showMask) {
      const keys = currentKey.split('_');
      key = `${keys[0]}${keys[1]}`;
      data = this.config[keys[0]].data[keys[1]].dataSource;
    }
    const overlayChildren = !showMask && enterKey ?
      <OverLay {...overlay} key="overlay">{this.state.enterKey}</OverLay> : null;
    const textChildren = (<TweenOneGroup component=""
      enter={{ opacity: 0, scale: 0, type: 'from', ease: 'easeOutBack' }}
      leave={{ opacity: 0, scale: 0, ease: 'easeInBack' }}
      key="text"
    >
      {showMask ? <TextController childKey={key} config={this.configURL} data={data} key="text" /> : null}
    </TweenOneGroup>);
    const maskChildren = (<TweenOneGroup
      enter={{ opacity: 0, type: 'from' }}
      leave={{ opacity:0 }}
      component=""
      key="mask"
    >
      {showMask ? <Mask key="mask" top={overlay.top} height={overlay.height} onClick={this.onMaskClose} />: null}
    </TweenOneGroup>);
    return (<div className="templates-wrapper">
      {children}
      {!mode ? [overlayChildren, textChildren, maskChildren] : null}
      <NavController key="nav" config={this.config} />
    </div>);
  }
}
