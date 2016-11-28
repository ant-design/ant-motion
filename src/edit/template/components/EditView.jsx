import React, { PropTypes } from 'react';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';


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

  getLi = (data, key, typeKey) => {
    const changeValue = this.changeValue.bind(this, key, typeKey);
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
      inputItem = (<InputGroup onChange={changeValue} key={data.value} >
        {children}
      </InputGroup>);
      for (let i = 0; i < data.length; i += 1) {
        const value = values[i] || values[i - 2] || values[0];
        children.push(
          <Input key={i} defaultValue={value} size="small" />
        );
      }
    }

    return (<li key={key || 'a'}>
      <span>
        {data.name}
        {data.remark && <Tooltip title={data.remark}><Icon type="question-circle-o" /></Tooltip>}
      </span>
      <div>
        {inputItem}
      </div>
    </li>);
  }

  getEditChild = (data, typeKey) => {
    if ('value' in data) {
      return this.getLi(data, null, typeKey);
    }
    return Object.keys(data).map(key => this.getLi(data[key], key, typeKey));
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
    return Object.keys(defaultData[childId]).map((key) => {
      let name;
      switch (key) {
        case 'style':
          name = '样式编辑';
          break;
        case 'children':
          name = '内容编辑';
          break;
        default:
          name = key;
          break;
      }
      return (<div key={key}>
        <h3><span>{name}</span></h3>
        <ul>{this.getEditChild(defaultData[childId][key], key)}</ul>
      </div>);
    });
  }

  changeValue = (key, typeKey, e) => {
    const value = e.target ? e.target.value : e.join(' ');
    const ids = this.props.editId.split('-');
    const id = ids[0];
    const a = this.config[id] = this.config[id] || {};
    const bIds = ids[0].split('_');
    let childId = ids[1] || '';
    childId = childId ? `_${childId}` : '';
    childId = `${bIds[0]}${bIds[1]}${childId}`;
    const b = a[childId] = a[childId] || {};
    if (key) {
      const c = b[typeKey] = b[typeKey] || {};
      c[key] = value;
    } else {
      b[typeKey] = value;
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
    return (<div className={this.props.className}>
      {children}
      <div className="button-wrapper">
        <Button
          type="primary"
          onClick={this.clickMake}
        >
          保存
        </Button>
      </div>
    </div>);
  }
}
