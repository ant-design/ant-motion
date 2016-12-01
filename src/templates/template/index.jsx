import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import webData from '../template.config';
import { getURLData, mergeURLDataToDefault } from './utils';
import '../static/common.less';

const Point = require('./other/Point');

export default class Templates extends React.Component {
  static propTypes = {
    location: React.PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.scrollScreen = false;
    this.listPoint = false;
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
    this.myRef = {};
  }

  componentDidMount() {
    if (this.scrollScreen) {
      const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      scrollScreen.init({ docHeight });
    }
    if (this.listPoint) {
      const list = ReactDOM.findDOMNode(this.listComp);
      const listHeight = list.getBoundingClientRect().height;
      list.style.marginTop = `-${listHeight / 2}px`;
    }
  }

  componentWillReceiveProps() {
    if (this.state.showMask) {
      // maskChild 的位置需要把数据 set 后再去获取。。。所以用 setState 的 callback;
      this.setState({}, () => {
        const dom = $(ReactDOM.findDOMNode(this.myRef[this.state.currentKey]));
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

  getTemplatesToChildren = () => {
    let isNav;
    const tData = getURLData('t', this.props.location.hash);
    if (!tData) {
      return (<div>请添加你的模块</div>);
    }
    const otherData = getURLData('o', this.props.location.hash) || '';
    const data = tData.split(',');
    const other = otherData.split(',');
    const configURL = JSON.parse(getURLData('c') || '{}');
    // this.config = mergeURLDataToConfig(webData, this.configURL);
    const children = data.map((item) => {
      const dataArr = item.split('_');
      let dataId = `${dataArr[0]}${dataArr[1]}`;
      dataId = `${dataId.charAt(0).toUpperCase()}${dataId.slice(1, dataId.length)}`;
      const defaultData = webData[dataId];
      const urlData = configURL[item];
      const nextData = mergeURLDataToDefault(urlData, defaultData);
      isNav = dataArr[0] === 'nav';
      const Component = defaultData.component;
      if (!Component) {
        return null;
      }
      const dataSource = this.getChildrenProps(nextData,
        isNav && !(other.indexOf('fixed') >= 0));
      if (isNav && other.indexOf('fixed') >= 0) {
        props.style = props.style || {};
        props.style.position = 'fixed';
      }
      return React.createElement(Component,
        {
          key: item,
          id: item,
          ref: (c) => {
            this.myRef[item] = c;
          },
          dataSource,
        });
    });
    // 判断其它里的；
    other.forEach((item) => {
      switch (item) {
        case 'fixed': {
          break;
        }
        case 'point': {
          this.listPoint = true;
          children.push(<Point key="list" data={data} ref={(c) => { this.listComp = c; }} />);
          break;
        }
        case 'full': {
          this.scrollScreen = true;
          break;
        }
        default: {
          break;
        }
      }
    });
    return children;
  };

  setProps = (_data, key) => {
    const item = _data[key];
    const data = _data;
    if (typeof item !== 'object') {
      return;
    }
    if ('value' in item) {
      if (key === 'backgroundImage') {
        data[key] = `url(${item.value})`;
      } else {
        data[key] = item.value;
      }
    } else {
      Object.keys(data[key]).forEach(this.setProps.bind(this, data[key]));
    }
  }

  getChildrenProps = (data) => {
    if (!data) {
      return {};
    }
    Object.keys(data).forEach(this.setProps.bind(this, data));
    return data;
  };

  render() {
    const children = this.getTemplatesToChildren();
    return (<div className="templates-wrapper">
      {children}
    </div>);
  }
}
