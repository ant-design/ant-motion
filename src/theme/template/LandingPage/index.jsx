import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import classnames from 'classnames';
import { Icon } from 'antd';
import { landingPageData } from './data';

import { getURLData } from '../../../templates/template/utils';

export default class LandingPage extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    gridType: PropTypes.string,
  };

  static defaultProps = {
    className: 'landing-page',
  };

  constructor(props) {
    super(props);
    const classify = parseFloat(getURLData('classify')) || 0;
    // const page = parseFloat(getURLData('page')) || 0;

    this.state = {
      classify,
      // page,
    };
  }

  onToGa = (key, name) => {
    if (!location.port && window.ga) {
      window.ga('send', 'event', 'landingpage', key, name);
    }
  }
  getLeaveFunc = () => {

  }

  getEnterFunc = () => {

  }

  getIconButton = (preview, download, name, showText) => (
    <div className="icon-wrapper">
      <a
        className="preview"
        target="_blank"
        href={preview}
        onClick={() => {
          this.onToGa('preview', name);
        }}
      >
        <Icon type="eye" />{showText && ' 预 览'}
      </a>
      <a
        className="download"
        target="_blank"
        href={download}
        onClick={() => {
          this.onToGa('download', name);
        }}
      >
        <Icon type="download" />{showText && ' 下 载'}
      </a>
    </div>
  )

  getChildToRender = (className) => {
    const { classify } = this.state;
    const isMin = this.props.gridType === 'min';
    // const pageNum = isMin ? 20 : 10;
    let heightNum = 0;
    const children = landingPageData.map((item, i) => {
      if (classify && item.classify !== classify) {
        return null;
      }
      const left = i % (isMin ? 4 : 2) * (isMin ? 25 : 52);
      const top = Math.floor(i / (isMin ? 4 : 2)) * (isMin ? 234 : 400);
      const delay = isMin ? `${i * 30}ms` : `${(landingPageData.length - 1 - i) * 50}ms`;
      heightNum += 1;
      return (<div
        className={classnames(`${className}-item`, { min: isMin })}
        key={i.toString()}
        style={{ left: `${left}%`, top, transitionDelay: delay }}
      >
        <div className="item-image-wrapper">
          <a href={item.href} target="_blank" onClick={() => { this.onToGa('preview', item.name); }}>
            <img src={item.src} width="100%" />
          </a>
          {this.getIconButton(item.href, item.down, item.name, true)}
        </div>
        <div className="item-text-wrapper">
          <div className="text-wrapper" span={20}>
            <h2>{item.name}</h2>
            <p>{item.content}</p>
          </div>
          {this.getIconButton(item.href, item.down, item.name)}
        </div>
      </div>);
    }).filter(c => c);
    this.wrapperHeight = Math.ceil(heightNum / (isMin ? 4 : 2)) * (isMin ? 234 : 400);
    return children;
  }
  render() {
    const { className } = this.props;
    const children = this.getChildToRender(className);
    console.log(this.wrapperHeight);
    return (
      <div className="page padding-top">
        <DocumentTitle title="模板案例 - Ant Motion" />
        <div
          className={`page-wrapper ${className}-wrapper`}
          style={{ height: this.wrapperHeight }}
        >
          <TweenOne className={className} animation={{ y: 30, type: 'from', opacity: 0 }}>
            <TweenOneGroup
              appear={false}
              enter={this.getEnterFunc}
              leave={this.getLeaveFunc}
            >
              {children}
            </TweenOneGroup>
          </TweenOne>
        </div>
      </div>
    );
  }
}
