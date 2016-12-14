import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import { TweenOneGroup } from 'rc-tween-one';
import SketchPicker from 'react-color';
import deepCopy from 'deepcopy';
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
    this.wrapperRect = {
      top: 0,
    };
    this.sketchColorKeyObj = {};
    this.state = {
      pickerColor: null,
      rect: {
        top: 0,
      },
      config: deepCopy(this.props.urlData.c || {}),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editId !== this.props.editId) {
      this.remIsColor();
    }
  }

  getColorChildren = () => {
    const keyObj = this.sketchColorKeyObj;
    const parentKey = Array.isArray(keyObj.parentKey) ?
      keyObj.parentKey.join('') : keyObj.parentKey;
    let key = parentKey ? `${parentKey}${keyObj.typeKey}${keyObj.key}` :
      `${keyObj.typeKey}${keyObj.key}`;
    key = keyObj.key ? key : '';
    return (
      <TweenOneGroup
        enter={{ opacity: 0, y: '-=10', type: 'from', duration: 300 }}
        leave={{ opacity: 0, scaleY: 0.8, duration: 300 }}
        // onBlur={this.remIsColor}
        ref={(c) => {
          this.sketchColorWrapper = c;
        }}
        tabIndex="0"
        style={{
          top: (this.state.rect.top - this.wrapperRect.top + 24),
        }}
        id="Color"
        className={`${this.props.className}-color-wrapper`}
        key={key}
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
  }

  getLi = (data, key, typeKey, parentKey) => {
    if (typeof data !== 'object') {
      return null;
    }
    if (!('value' in data)) {
      const parentKeys = [parentKey];
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
      type={!isColorFuc(data.value) ? 'textarea' : 'input'}
      autosize={!isColorFuc(data.value)}
      onChange={changeValue}
      key={data.name}
      size="small"
      onFocus={inputFocus}
    />);
    if (data.select) {
      const sChildren = data.select.map((item) => {
        if (typeof item === 'string') {
          return (<Option value={item} key={item}>{item}</Option>);
        }
        return (<Option value={item.value} key={item.value}>{item.name} {item.value}</Option>);
      });
      childItem = (<Select size="small" defaultValue={value} key={data.name} onChange={changeValue}>
        {sChildren}
      </Select>);
    }
    const av = parseFloat(data.value);
    if (typeKey !== 'children' && (av || av === 0)) {
      childItem = this.getInputNumberChildren(value, changeValue, data.value, 'input-group-max', true);
    }
    if (data.length) {
      const values = value.split(/\s+/);
      const dataValues = data.value.split(/\s+/);
      const children = [];
      childItem = (<InputGroup onChange={changeValue} key={data.value} className="input-group-max">
        {children}
      </InputGroup>);
      for (let i = 0; i < data.length; i += 1) {
        const cValue = values[i] || values[i - 2] || values[0];
        const dValue = dataValues[i] || dataValues[i - 2] || dataValues[0];
        inputFocus = !data.blend && ((e) => {
            this.inputFocus(key, typeKey, parentKey, values, i, e);
          });
        const cv = parseFloat(dValue);
        if (cv || cv === 0) {
          children.push(this.getInputNumberChildren(cValue, null, i, 'input-group-min'))
        } else {
          children.push(
            <Input key={i} value={cValue} size="small" onFocus={inputFocus} />
          );
        }
      }
    }
    const liProps = key ? { key } : null;
    return (<li {...liProps}>
      <span>
        {data.name}
        {data.remark && <Tooltip title={data.remark}><Icon type="question-circle-o" /></Tooltip>}
      </span>
      <div>
        {childItem}
      </div>
    </li>);
  }

  getInputNumberChildren = (value, changeValue, key, className, isMax) => {
    const cv = parseFloat(value);
    return (<InputGroup
      onChange={changeValue}
      key={key}
      className={className}
      value={value}
      isMax={isMax}
    >
      <InputNumber className={`${className}-number`} key="input" value={cv} size="small" />
      <Select
        className={`${className}-select`}
        size="small"
        defaultValue={value.replace(/[^a-z|%]/ig, '') || 'px'}
        key='select'
      >
        <Option value="px" key="px">px</Option>
        <Option value="%" key="%">%</Option>
        <Option value="em" key="em">em</Option>
        <Option value="vh" key="vh">vh</Option>
        <Option value="vw" key="vw">vw</Option>
      </Select>
    </InputGroup>);
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
      return this.getAllData(defaultData);
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
          || data[key][Object.keys(data[key])[0]].value
          || data[key].value === '')
          && <h3><span>{name}</span></h3>}
        <ul>{this.getEditChild(data[key], key, parentKey)}</ul>
      </div>);
    });

  getAllData = defaultData =>
    Object.keys(defaultData).filter(key => typeof defaultData[key] === 'object')
      .map((key) => {
        const item = defaultData[key];
        return this.getChildren(item, key);
      });

  getCurrentConfigData = (key, typeKey, editId) => {
    const ids = getEditID(this.props.editId);
    const id = ids.id;
    const a = this.state.config[id] || {};
    let childId = ids.childId;
    let b;
    if (Array.isArray(editId)) {
      const idArray = editId;
      idArray[0] = idArray[0] || childId;
      b = getChildrenObject(a, idArray);
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
      const idArray = editId;
      // 获取全部时，数组里第一个是有值的，没值的情况把 childId 替换到第一个；
      idArray[0] = idArray[0] || childId;
      b = createChildrenObject(a, idArray);
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
    const obj = { c: deepCopy(this.state.config) };
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
    this.setState({
      pickerColor: value,
    }, () => {
      this.changeValue(this.sketchColorKeyObj.key,
        this.sketchColorKeyObj.typeKey,
        this.sketchColorKeyObj.parentKey,
        values
      );
    });
  }

  inputFocus = (key, typeKey, parentKey, values, i, e) => {
    const input = e.target;
    const value = input.value;
    const rect = getRect($(input));
    this.wrapperRect = getRect($(ReactDOM.findDOMNode(this.wrapperDom)));
    this.isArrayValue = null;
    if (isColorFuc(value)) {
      if (this.inputDom) {
        this.remIsColor();
      }
      this.inputDom = input;
      this.sketchDom = ReactDOM.findDOMNode(this.sketchColorWrapper); // .focus();
      $(window).click(this.windowClick);
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

  windowClick = (e) => {
    const dom = e.target;
    if (dom === this.inputDom || this.getParentDom(dom)) {
      e.preventDefault();
    } else {
      this.remIsColor();
    }
  }

  getParentDom = (dom) => {
    const parentDom = dom.parentNode;
    if (this.sketchDom.id === parentDom.id) {
      return true;
    } else if (parentDom.parentNode && parentDom.parentNode !== document.body) {
      return this.getParentDom(parentDom);
    }
    return false
  }

  remIsColor = () => {
    if (this.state.pickerColor) {
      $(window).unbind('click', this.windowClick);
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
