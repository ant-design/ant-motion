import React from 'react';
import webData from './template.config';
import AutoResponsiveDemo from './AutoResponsiveDemo';
import { TweenOneGroup } from 'rc-tween-one';
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Modal from 'antd/lib/modal';
import ListSort from './ListSort';

class Splicing extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'splicing',
  };

  constructor() {
    super(...arguments);
    this.state = {
      templateOptData: {},
      modalOpen: false,
      optImgChild: null,
      templateIds: [],
    };
  }

  onChildClick = (name, array) => {
    const templateOptData = this.state.templateOptData;
    templateOptData[name] = array;
    this.setState({ templateOptData });
  };

  onClose = (item, key) => {
    const templateOptData = this.state.templateOptData;
    templateOptData[key] = templateOptData[key].filter(_item => item.key !== _item.key);
    this.setState({ templateOptData });
  };

  getOptTags = (key) => (this.state.templateOptData[key] || []).map(item =>
    <Tag key={item.key} closable afterClose={this.onClose.bind(this, item, key)}>
      {`${key}_${item.vars}`}
    </Tag>
  );

  onCompleteClick = () => {
    const templateOptData = this.state.templateOptData;
    const optKeys = Object.keys(templateOptData);
    if (!optKeys.length) {
      return message.error('你未做任何选择，请选择你需要的板块。');
    }
    const optImgChild = [];
    const templateIds = [];
    optKeys.sort((a, b) => webData[a].order - webData[b].order)
      .forEach(key => {
        templateOptData[key].forEach(item => {
          templateIds.push(`${key}_${item.vars}`);
          optImgChild.push(<span
            key={item.key}
            id={`${key}_${item.vars}`}
          >
            <img src={webData[key].data[item.vars].src} width="100%" />
          </span>);
        });
      });
    this.setState({
      optImgChild,
      templateIds,
      modalOpen: true,
    });
  };

  onCancel = () => {
    this.setState({ modalOpen: false });
  };

  getDataToChildren = () => {
    return Object.keys(webData).map(key => {
      const item = webData[key];
      const imgArr = item.data.map(imgData => {
        const _imgData = imgData;
        _imgData.width = 300;
        _imgData.height = 185;
        return _imgData
      });
      const onClick = this.onChildClick.bind(this, key);
      return (<div key={key} className={this.props.className}>
        <TweenOneGroup
          component="h2"
          enter={{ opacity: 0, type: 'from', duration: 300 }}
          leave={{ opacity: 0, duration: 300 }}
        >
          {item.name}
          {this.state.templateOptData[key] && this.state.templateOptData[key].length ?
          <div key="opt" className={`${this.props.className}-tag-wrapper`}>
            当前选择：
            {this.getOptTags(key)}
          </div> : ''}
        </TweenOneGroup>
        <AutoResponsiveDemo
          imgArr={imgArr}
          onClick={onClick}
          checkbox={item.checkbox}
          optIndex={this.state.templateOptData[key] || []}
        />
      </div>)
    });
  };

  toTemplate = ()=> {
    console.log(this.state.templateIds)
  };

  onListSortChange = (children) => {
    const templateIds = children.map(item => item.props.id);
    this.setState({ templateIds });
  };

  render() {
    const childrenToRender = this.getDataToChildren();
    return (<div className={`${this.props.className}-wrapper`}>
      {childrenToRender}
      <div className="bottom-btn">
        <Button type="primary" size="large" onClick={this.onCompleteClick}>选择完成</Button>
        <Modal
          visible={this.state.modalOpen}
          onCancel={this.onCancel}
          footer={null}
        >
          <h2 className={`${this.props.className}-modal-title`}>页面布局预览</h2>
          <p className={`${this.props.className}-modal-explain`}>托动下面区块调整页面布局顺序。</p>
          <ListSort className={`${this.props.className}-modal-img-wrapper`} onChange={this.onListSortChange}>
            {this.state.optImgChild}
          </ListSort>
          <div className={`${this.props.className}-modal-button-wrapper`}>
            <Button type="primary" onClick={this.toTemplate}>确定</Button>
            <Button onClick={this.onCancel}>重选</Button>
          </div>
        </Modal>
      </div>
    </div>)
  }
}
export default Splicing;
