import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import AutoComplete from 'antd/lib/auto-complete';
import { TweenOneGroup } from 'rc-tween-one';
import SketchPicker from 'react-color';
import InputGroup from './InputGroup';

import webData from '../../../templates/template.config';
import { mergeURLDataToDefault, getRect } from '../../../templates/template/utils';
import {
  getEditID,
  createChildrenObject,
  getChildrenObject,
  isColorFuc,
} from '../utils';

const $ = window.$;
const Option = Select.Option;

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
    // this.config = {};
    this.wrapperRect = {
      top: 0,
    };
    this.state = {
      pickerColor: null,
      rect: {
        top: 0,
      },
      config: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editId !== this.props.editId) {
      this.remIsColor();
    }
  }

  getColorChildren = () => (
    // style 一直在刷新，所以动画会重置;
    <TweenOneGroup
      enter={{ opacity: 0, y: '-=10', type: 'from', duration: 300 }}
      leave={{ opacity: 0, scaleY: 0.8, duration: 300 }}
      onBlur={this.remIsColor}
      ref={(c) => {
        this.sketchColorWrapper = c;
      }}
      tabIndex="0"
      style={{
        top: (this.state.rect.top - this.wrapperRect.top + 24),
      }}
      className={`${this.props.className}-color-wrapper`}
    >
      {this.state.pickerColor &&
      <div
        key="color"
        className={`${this.props.className}-color`}
      >
        <SketchPicker
          color={this.state.pickerColor}
          onChange={this.colorHandleChange}
        />
      </div>}
    </TweenOneGroup>
  );

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
    const changeValue = (e) => {
      this.changeValue(key, typeKey, parentKey, e);
    };
    let inputFocus = !data.blend && ((e) => {
      this.inputFocus(key, typeKey, parentKey, null, null, e);
    });
    const v = this.getCurrentConfigData(key, typeKey, parentKey);
    const value = v || v === '' ? v : data.value;
    let childItem = (<Input
      value={value}
      type={!isColorFuc(value) ? 'textarea' : 'input'}
      autosize={!isColorFuc(value)}
      onChange={changeValue}
      key={data.name}
      size="small"
      onFocus={inputFocus}
    />);
    if (data.select) {
      childItem = (<Select size="small" defaultValue={value} key={data.name} onChange={changeValue}>
        {data.select.map(item => (<Option value={item} key={item}>{item}</Option>))}
      </Select>);
    }
    const av = parseFloat(data.value);
    if (av || av === 0) {
      const cv = parseFloat(value);
      const dataSource = [`${cv || ''}px`, `${cv || ''}vh`, `${cv || ''}%`];
      childItem = (<AutoComplete
        dataSource={dataSource}
        defaultValue={value}
        key={data.name}
        onChange={changeValue}
        size="small"
      />);
    }
    if (data.length) {
      const values = value.split(/\s+/);
      const children = [];
      childItem = (<InputGroup onChange={changeValue} key={value}>
        {children}
      </InputGroup>);
      for (let i = 0; i < data.length; i += 1) {
        const cValue = values[i] || values[i - 2] || values[0];
        inputFocus = !data.blend && ((e) => {
          this.inputFocus(key, typeKey, parentKey, values, i, e);
        });
        children.push(
          <Input key={i} defaultValue={cValue} size="small" onFocus={inputFocus} />
        );
      }
    }
    return (<li key={key || Date.now()}>
      <span>
        {data.name}
        {data.remark && <Tooltip title={data.remark}><Icon type="question-circle-o" /></Tooltip>}
      </span>
      <div>
        {childItem}
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

  getCurrentConfigData = (key, typeKey, editId) => {
    const ids = getEditID(this.props.editId);
    const id = ids.id;
    const a = this.state.config[id] || {};
    let childId = ids.childId;
    let b;
    if (Array.isArray(editId)) {
      b = getChildrenObject(a, [childId].concat(editId));
    } else {
      childId = editId || childId;
      b = a[childId] || {};
    }
    if (key) {
      const c = b[typeKey] || {};
      return c[key];
    }
    return b[typeKey];
  }

  changeValue = (key, typeKey, editId, e) => {
    /*
     * children 里三种形式:
     * children: { value: '1', name: '1' };
     * children: { menu0: { value: '1', name: '1' }}; 子级不带样式;
     * children: { icon: { style: {}, children: { value: '1', name: '1' } }}; 子级带样式；
     */
    let value = e.target ? e.target.value : typeof e === 'string' && e;
    value = value || value === '' ? value : e.join(' ');
    const ids = getEditID(this.props.editId);
    const id = ids.id;
    const config = this.state.config;
    const a = config[id] = config[id] || {};
    let childId = ids.childId;
    let b;
    if (Array.isArray(editId)) {
      // 子级带样式的， editId 为父级的 keys;
      b = createChildrenObject(a, [childId].concat(editId));
    } else {
      childId = editId || childId;
      b = a[childId] = a[childId] || {};
    }
    if (key) {
      // 子级不带样式直接转换；
      const c = b[typeKey] = b[typeKey] || {};
      c[key] = value;
    } else {
      b[typeKey] = value;
    }
    this.setState({ config });
  }

  clickMake = () => {
    const obj = { c: this.state.config };
    this.props.setUrlData(obj);
  }

  colorHandleChange = (color) => {
    let value = color.hex;
    if (color.rgb.a < 1) {
      value = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    }
    let values = [value];
    if (this.isArrayValue) {
      values = this.isArrayValue.values;
      values[this.isArrayValue.i] = value;
    }
    // changeValue刷了，，重突;
    this.state.pickerColor = value;
    this.changeValue(this.sketchColorKeyObj.key,
      this.sketchColorKeyObj.typeKey,
      this.sketchColorKeyObj.parentKey,
      values
    );
    /* this.setState({
     pickerColor: value,
     });*/
  }

  inputFocus = (key, typeKey, parentKey, values, i, e) => {
    const input = e.target;
    const value = input.value;
    const rect = getRect($(input));
    this.wrapperRect = getRect($(ReactDOM.findDOMNode(this.wrapperDom)));
    this.isArrayValue = null;
    if (isColorFuc(value)) {
      ReactDOM.findDOMNode(this.sketchColorWrapper).focus();
      this.sketchColorKeyObj = {
        key, typeKey, parentKey,
      };
      this.isArrayValue = values && { values, i };
      this.setState({
        pickerColor: value,
        rect,
      });
    }
  }

  remIsColor = () => {
    if (this.state.pickerColor) {
      this.setState({
        pickerColor: null,
      });
    }
  };

  render() {
    if (!this.props.editId) {
      return <div>请选择要编辑的区域</div>;
    }
    const children = this.getDataToEditChildren();
    // input 用的是响应式， 动画不可以做height；
    return (
      <div>
        <TweenOneGroup
          className={`${this.props.className}-wrapper`}
          enter={{ x: 30, opacity: 0, type: 'from' }}
          leave={{ x: -30, opacity: 0 }}
          appear={false}
          ref={(c) => { this.wrapperDom = c; }}
        >
          <div
            key={this.props.editId}
            className={this.props.className}
          >
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
        </TweenOneGroup>
        {this.getColorChildren()}
      </div>);
  }
}
