import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import classnames from 'classnames';
import { Icon } from 'antd';
import { landingPageData } from './data';

export default class LandingPage extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    gridType: PropTypes.string,
    classify: PropTypes.any,
  };

  static defaultProps = {
    className: 'landing-page',
  };

  onToGa = (key, name) => {
    if (!location.port && window.ga) {
      window.ga('send', 'event', 'landingpage', key, name);
    }
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
    const { classify } = this.props;
    const isMin = this.props.gridType === 'min';
    let heightNum = 0;
    const newPageData = landingPageData.filter(item => (
      classify && (classify === 'all' || classify.indexOf(item.classify.toString()) > -1)
    ));
    const children = newPageData.map((item, i) => {
      const left = i % (isMin ? 4 : 2) * (isMin ? 25 : 52);
      const top = Math.floor(i / (isMin ? 4 : 2)) * (isMin ? 234 : 400);
      heightNum += 1;
      return (<div
        className={classnames(`${className}-item`, { min: isMin })}
        key={item.name}
        style={{
          left: `${left}%`, top,
        }}
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
  enterRemStyle = (e) => {
    e.target.style.transform = '';
    e.target.style.opacity = '';
  }
  render() {
    const { className } = this.props;
    const children = this.getChildToRender(className);
    return (
      <div className="page padding-top">
        <DocumentTitle title="模板案例 - Ant Motion" />
        <div
          className={`page-wrapper ${className}-wrapper`}
        >
          <TweenOne
            className={className}
            animation={{ y: 30, type: 'from', opacity: 0 }}
            style={{ height: this.wrapperHeight }}
          >
            <TweenOneGroup
              appear={false}
              enter={{
                scale: 0, opacity: 0, type: 'from', onComplete: this.enterRemStyle,
              }}
              leave={{ scale: 0, opacity: 0 }}
            >
              {children}
            </TweenOneGroup>
          </TweenOne>
        </div>
      </div>
    );
  }
}
