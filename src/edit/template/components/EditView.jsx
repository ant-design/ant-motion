import React, { PropTypes } from 'react';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import { TweenOneGroup } from 'rc-tween-one';

import InputGroup from './InputGroup';

import webData from '../../../templates/template.config';
import { mergeURLDataToDefault } from '../../../templates/template/utils';

export default class EditView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    editId: PropTypes.string,
    urlData: PropTypes.object,
    setUrlData: PropTypes.func,
  };

  static defaultProps = {
    className: 'edit-view',
    setUrlData: () => {
    },
  };

  constructor(props) {
    super(props);
    this.config = {};
  }

  getLi = (data, key, typeKey, parentKey) => {
    if (typeof data !== 'object') {
      return null;
    }
    if (!('value' in data)) {
      const parentKeys = parentKey || [];
      parentKeys.push(typeKey, key);
      return (<li key={key}>
        {this.getChildren(data, parentKeys, true)}
      </li>);
    }
    const changeValue = this.changeValue.bind(this, key, typeKey, parentKey);
    let inputItem = (<Input
      defaultValue={data.value}
      type="textarea"
      autosize
      onChange={changeValue}
      key={data.value}
      size="small"
    />);
    if (data.length) {
      const values = data.value.split(/\s+/);
      const children = [];
      inputItem = (<InputGroup onChange={changeValue} key={data.value}>
        {children}
      </InputGroup>);
      for (let i = 0; i < data.length; i += 1) {
        const value = values[i] || values[i - 2] || values[0];
        children.push(
          <Input key={i} defaultValue={value} size="small" />
        );
      }
    }

    return (<li key={key || Date.now()}>
      <span>
        {data.name}
        {data.remark && <Tooltip title={data.remark}><Icon type="question-circle-o" /></Tooltip>}
      </span>
      <div>
        {inputItem}
      </div>
    </li>);
  }

  getEditChild = (data, typeKey, parentKey) => {
    if (typeof data !== 'object') {
      return null;
    }
    if ('value' in data) {
      return this.getLi(data, null, typeKey, parentKey);
    }
    return Object.keys(data).map(key => this.getLi(data[key], key, typeKey, parentKey));
  }

  getDataToEditChildren = () => {
    const ids = this.props.editId.split('_');
    let dataId = ids[0];
    dataId = `${dataId.charAt(0).toUpperCase()}${dataId.slice(1, dataId.length)}${ids[1]}`;
    let childId = ids[2].split('-')[1] || '';
    childId = childId ? `_${childId}` : '';
    childId = `${ids[0]}${ids[1]}${childId}`;
    const id = this.props.editId.split('-')[0];
    const currentData = webData[dataId];
    const sData = this.props.urlData.c || {};
    const data = sData[id];
    const defaultData = mergeURLDataToDefault(data, currentData);
    if (defaultData.all) {
      return this.getAllData(defaultData, childId);
    }
    return this.getChildren(defaultData[childId]);
  }

  getChildren = (data, parentKey, childrenLi) =>
    Object.keys(data).map((key) => {
      let name;
      switch (key) {
        case 'style':
          name = '样式编辑';
          break;
        case 'children':
          name = '内容编辑';
          break;
        default:
          return <h2 key={key}>{data.name}</h2>;
      }
      return (<div
        key={key}
        className={`${this.props.className}-module-wrapper ${
          childrenLi && 'children-wrapper' || ''}`}
      >
        {(data[key].value || key === 'style'
          || data[key][Object.keys(data[key])[0]].value)
          && <h3><span>{name}</span></h3>}
        <ul>{this.getEditChild(data[key], key, parentKey)}</ul>
      </div>);
    });

  getAllData = (defaultData, childId) => {
    const dataLength = Math.max.apply({}, Object.keys(defaultData)
      .map(item => parseFloat((item.split('_')[1] || '0').replace(/[^0-9]/g, ''))));
    const children = [];
    let tObj;
    const setObjData = (i) => {
      Object.keys(defaultData).forEach((key) => {
        const num = parseFloat((key.split('_')[1] || '').replace(/[^0-9]/g, ''));
        if (num === i - 1) {
          tObj[key] = defaultData[key];
        }
      });
    };
    for (let i = 0; i <= dataLength + 1; i += 1) {
      if (i === 0) {
        tObj = { name: '整个区块', remark: '信息过多，请仔细阅读标题。' };
        tObj[childId] = defaultData[childId];
      } else {
        let name = '一';
        switch (i) {
          case 1:
            name = '一';
            break;
          case 2:
            name = '二';
            break;
          default:
            name = '三';
        }
        tObj = { name: `第${name}屏` };
        setObjData(i);
      }
      children.push(tObj);
    }
    return children.map((item) => {
      const childrenList = Object.keys(item).map((key) => {
        if (typeof item[key] === 'string') {
          return null;
        }
        return (<div key={key}>
          {this.getChildren(item[key], key)}
        </div>);
      }).filter(a => a);
      return (<div key={item.name}>
        <h1>
          {item.name}
          {item.remark && <span>{item.remark}</span>}
        </h1>
        {childrenList}
      </div>);
    });
  }

  createChildrenObject = (object, keys) => {
    const obj = object;
    let t = {};
    keys.forEach((key, i) => {
      if (i) {
        t = t[key] = t[key] || {};
      } else {
        t = obj[key] = obj[key] || {};
      }
    });
    return t;
  };

  changeValue = (key, typeKey, editId, e) => {
    /*
     * children 里三种形式:
     * children: { value: '1', name: '1' };
     * children: { menu0: { value: '1', name: '1' }}; 子级不带样式;
     * children: { icon: { style: {}, children: { value: '1', name: '1' } }}; 子级带样式；
     */
    const value = e.target ? e.target.value : e.join(' ');
    const ids = this.props.editId.split('-');
    const id = ids[0];
    const a = this.config[id] = this.config[id] || {};
    const bIds = ids[0].split('_');
    let childId = ids[1] || '';
    childId = childId ? `_${childId}` : '';
    childId = `${bIds[0]}${bIds[1]}${childId}`;
    let b;
    if (Array.isArray(editId)) {
      // 子级带样式的， editId 为父级的 keys;
      b = this.createChildrenObject(a, [childId].concat(editId));
      b[typeKey] = value;
    } else {
      childId = editId || childId;
      b = a[childId] = a[childId] || {};
      if (key) {
        // 子级不带样式直接转换；
        const c = b[typeKey] = b[typeKey] || {};
        c[key] = value;
      } else {
        b[typeKey] = value;
      }
    }
  }

  clickMake = () => {
    const obj = { c: this.config };
    this.props.setUrlData(obj);
  }

  render() {
    if (!this.props.editId) {
      return <div>请选择要编辑的区域</div>;
    }
    const children = this.getDataToEditChildren();
    // input 用的是响应式， 动画不可以做height；
    return (<TweenOneGroup
      className={`${this.props.className}-wrapper`}
      enter={{ x: 30, opacity: 0, type: 'from' }}
      leave={{ x: -30, opacity: 0 }}
      appear={false}
    >
      <div key={this.props.editId} className={this.props.className}>
        {children}
        <div className="button-wrapper">
          <Button
            type="primary"
            onClick={this.clickMake}
          >
            保存
          </Button>
        </div>
      </div>
    </TweenOneGroup>);
  }
}
