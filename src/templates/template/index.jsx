import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { scrollScreen } from 'rc-scroll-anim';
import { enquireScreen } from 'enquire-js';
import { notification } from 'antd';
import webData from '../template.config';
import { getURLData, mergeURLDataToDefault, dataValueReplace, getWebOrPhoneCss, getStyleToString } from './utils';
import '../static/common.less';
import '../static/point.less';

const Point = require('./other/Point');

export default class Templates extends React.Component {
  static propTypes = {
    location: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.scrollScreen = false;
    this.state = {
      isMobile: false,
    };
    this.webStyle = '';
    this.stylePhone = '';
    this.myRef = {};
  }

  componentDidMount() {
    this.componentDidUpdate();
    enquireScreen((isMobile) => {
      this.setState({ isMobile });
    });
    notification.open({
      message: '使用量调查',
      placement: 'bottomLeft',
      description: <p>
        如果你用了 Ant Motion 组件或 Landing page(首页)，麻烦将你的项目名称与链接
        <a href=" https://github.com/ant-design/ant-motion/issues/30 " target="_blank"> issues </a>
        留言，或在首页右侧的 Hotjar 里留言，以便后期对 Ant Motion 的更新。
      </p>,
      duration: 0,
    });
  }

  componentDidUpdate() {
    scrollScreen.unMount();
    if (this.scrollScreen) {
      const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      scrollScreen.init({ docHeight });
    }
  }

  setStyle = (id, data) => {
    if (data) {
      Object.keys(data).forEach((key) => {
        const item = data[key];
        const names = key.split('_');
        const childrenName = names[1];
        const cssName = `#${id}${childrenName ? `-${childrenName}` : ''}`;
        if (item) {
          const styleObj = {};
          Object.keys(item).forEach(getWebOrPhoneCss.bind(this, item, styleObj));
          if (styleObj.stylePhone) {
            this.stylePhone += getStyleToString(cssName, styleObj.stylePhone);
          }
          if (styleObj.style) {
            this.webStyle += getStyleToString(cssName, styleObj.style);
          }
        }
      });
    }
  }

  getTemplatesToChildren = () => {
    const tData = getURLData('t', this.props.location.hash);
    if (!tData) {
      return (<div>请添加你的模块</div>);
    }
    this.webStyle = '';
    this.stylePhone = '';
    const otherData = getURLData('o', this.props.location.hash) || '';
    const data = tData.split(',');
    const other = otherData.split(',');
    const configURL = JSON.parse(getURLData('c') || '{}');
    const children = data.map((item) => {
      const dataArr = item.split('_');
      let dataId = `${dataArr[0]}${dataArr[1]}`;
      dataId = `${dataId.charAt(0).toUpperCase()}${dataId.slice(1, dataId.length)}`;
      const defaultData = webData[dataId];
      const urlData = configURL[item];
      const nextData = mergeURLDataToDefault(urlData, defaultData);
      const Component = defaultData.component;
      if (!Component) {
        return null;
      }
      const dataSource = dataValueReplace(nextData);
      this.setStyle(item, urlData);
      return React.createElement(
        Component,
        {
          key: item,
          id: item,
          isMobile: this.state.isMobile,
          ref: (c) => {
            this.myRef[item] = c;
          },
          dataSource,
        }
      );
    });

    this.scrollScreen = false;
    // 判断其它里的；
    other.forEach((item) => {
      switch (item) {
        case 'point': {
          children.push(<Point
            key="list"
            data={data}
          />);
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

  getCss = () => {
    if (this.webStyle) {
      this.webStyle = `\n@media screen and (min-width: 768px) {\n${this.webStyle}}`;
    }
    if (this.stylePhone) {
      this.webStyle += `\n@media screen and (max-width: 767px) {\n${this.stylePhone}}`;
    }
    return this.webStyle;
  }

  render() {
    const children = this.getTemplatesToChildren();
    return (<div className="templates-wrapper">
      <style dangerouslySetInnerHTML={{ __html: this.getCss() }} />
      {children}
    </div>);
  }
}
