import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import webData from '../template.config';
import { getURLData, mergeURLDataToDefault, dataValueReplace, getWebOrPhoneCss, getStyleToString } from './utils';
import { enquireScreen } from '../../theme/template/utils';
import '../static/common.less';
import '../static/point.less';

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
      isMode: false,
    };
    this.webStyle = '';
    this.stylePhone = '';
    this.myRef = {};
  }

  componentDidMount() {
    this.componentDidUpdate();
    enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  componentDidUpdate() {
    scrollScreen.unMount();
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
    this.webStyle = this.stylePhone = '';
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
      return React.createElement(Component,
        {
          key: item,
          id: item,
          isMode: this.state.isMode,
          ref: (c) => {
            this.myRef[item] = c;
          },
          dataSource,
        });
    });

    this.listPoint = false;
    this.scrollScreen = false;
    // 判断其它里的；
    other.forEach((item) => {
      switch (item) {
        case 'point': {
          this.listPoint = true;
          children.push(<Point
            key="list" data={data} ref={(c) => {
              this.listComp = c;
            }}
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
    if (this.stylePhone) {
      this.webStyle += `\n@media screen and (max-width: 768px) {\n${this.stylePhone}}`;
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
