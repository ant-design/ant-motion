import React, { PropTypes } from 'react';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

import webData from '../../../templates/template.config';
import { mergeURLDataToDefault } from '../../../templates/template/utils';

export default class EditView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    editId: PropTypes.string,
    urlData: PropTypes.object,
  };

  static defaultProps = {
    className: 'edit-view',
  };

  constructor(props) {
    super(props);
    this.config = {};
    this.state = {
      data: this.props.urlData.c || {},
    };
  }

  getLi = (data, key, typeKey) => {
    const changeValue = this.changeValue.bind(this, key, typeKey);
    let inputItem = (<Input
      placeholder={data.value}
      type="textarea"
      autosize
      onChange={changeValue}
    />);
    if (data.length) {
      const values = data.value.split(/\s+/);
      inputItem = [];
      for (let i = 0; i < data.length; i += 1) {
        const value = values[i] || values[i - 2] || values[0];
        inputItem.push(<em key={i}>
          <Input placeholder={value} onChange={changeValue} />
        </em>);
      }
    }

    return (<li key={key || 'a'}>
      <span>
        {data.name}
        {data.remark && <Tooltip title={data.remark}><Icon type="question-circle-o" /></Tooltip>}
      </span>
      <p>
        {inputItem}
      </p>
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
    const defaultData = mergeURLDataToDefault(this.state.data[id], currentData);
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
      console.log(key);
      return (<div key={key}>
        <h3><span>{name}</span></h3>
        <ul>{this.getEditChild(defaultData[childId][key], key)}</ul>
      </div>);
    });
  }

  changeValue = (key, typeKey, e) => {
    console.log(key, e);
    const value = e.target.value;
    const ids = this.props.editId.split('-');
    const id = ids[0];
    this.config[id] = value;
    console.log(this.props.editId);
  }

  clickMake = () => {

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
