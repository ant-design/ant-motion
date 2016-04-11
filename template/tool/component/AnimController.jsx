import React, { PropTypes } from 'react';
import animType from '../../common/animType';
import Common from './Common';
import Popover from './Popover';
import List from './List';
import iconSrc from './iconSrc';
import { Input, InputNumber, Button } from 'antd';
const easeing = [
  'linear',
  'easeInSine',
  'easeOutSine',
  'easeInOutSine',
  'easeInQuad',
  'easeOutQuad',
  'easeInOutQuad',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint',
  'easeInExpo',
  'easeOutExpo',
  'easeInOutExpo',
  'easeInCirc',
  'easeOutCirc',
  'easeInOutCirc',
  'easeInBack',
  'easeOutBack',
  'easeInOutBack',
  'easeInElastic',
  'easeOutElastic',
  'easeInOutElastic',
  'easeInBounce',
  'easeOutBounce',
  'easeInOutBounce',
];

class AnimController extends Common {
  constructor() {
    super(...arguments);
    this.state = {
      config: this.props.stateConfig,
      childId: this.props.childId,
    };
    [
      'getAnimContent',
      'panelHandleChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  changeValue(_key, e) {
    const keys = _key.split('&>');
    const dom = e.target;
    const configChild = this.config[this.state.childId] = this.config[this.state.childId] || {};
    const key = keys[0];
    configChild.variables = configChild.variables || {};
    if (keys.length === 2) {
      configChild.variables[keys[0]] = configChild.variables[keys[0]] || {};
      configChild.variables[keys[0]][keys[1]] = dom.value;
    } else {
      configChild.variables[key] = dom.value;
    }
  }

  numberChangeValue(key, value) {
    const configChild = this.config[this.state.childId] = this.config[this.state.childId] || {};
    configChild.variables = configChild.variables || {};
    configChild.variables[key] = value;
  }

  panelHandleChange(type, value) {
    this.config[this.state.childId] = this.config[this.state.childId] || {};
    this.config[this.state.childId].variables = this.config[this.state.childId].variables || {};
    this.config[this.state.childId].variables[type] = value;
  }

  getAnimContent(data, i) {
    let animOptionChild;
    let panelHandleChange;
    if (data.key === 'type') {
      animOptionChild = Object.keys(animType).map(key => (data.donType || []).indexOf(key) >= 0 ?
        null : (<li value={key} key={key}>{animType[key].name}</li>)).filter(c => c);
    }
    const numberChangeValue = this.numberChangeValue.bind(this, data.key);
    const changeValue = this.changeValue.bind(this, data.key);
    let inputNumOrStr = typeof data.value === 'number' ? (
      <InputNumber
        min={data.key === 'delay' ? 0 : 100}
        step={100}
        defaultValue={data.value}
        onChange={numberChangeValue}
      />) : (<Input type="text" placeholder={data.value}
        onChange={changeValue}
      />);
    if (data.key === 'ease') {
      const easeChild = easeing.map(key => <li value={key} key={key}>{key}</li>);
      panelHandleChange = this.panelHandleChange.bind(this, 'ease');
      inputNumOrStr = (<List defaultValue={data.value}
        onChange={panelHandleChange}
        className="tool-list"
      >
        {easeChild}
      </List>);
    }
    panelHandleChange = this.panelHandleChange.bind(this, 'type');
    const animContentChild = data.key === 'type' ?
      (
        <List defaultValue={data.value}
          onChange={panelHandleChange}
          className="tool-list"
        >
          {animOptionChild}
        </List>) : inputNumOrStr;
    const placement = data.key === 'type' || data.key === 'ease' ? 'rightTop' : 'right';
    const overlayClassName = data.key === 'type' || data.key === 'ease' ?
      'tool-popover no-padding-right' : 'tool-popover';
    return (
      <li key={i}>
        <Popover placement={placement}
          overlay={animContentChild}
          overlayClassName={overlayClassName}
          trigger="click"
        >
          <button><img src={iconSrc[data.key]} /><p>{data.name}</p></button>
        </Popover>
      </li>);
  }

  render() {
    const animContent = this.props.data.map(this.getAnimContent);
    const clickMake = this.clickMake.bind(this, 'variables');
    return (
      <div className="tool-variable-panel" id="V-Panel" visible>
        <div className="tool-logo">
          <img src="https://os.alipayobjects.com/rmsportal/REMvFpbNayUvuur.svg" />
          <p>动画编辑</p>
        </div>
        <ul>
          {animContent}
        </ul>
        <Button type="primary" size="small"
          onClick={clickMake}
        >
          保存
        </Button>
      </div>
    );
  }
}

AnimController.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  childId: PropTypes.string,
  stateConfig: PropTypes.object,
};

AnimController.defaultProps = {
  className: 'tool-data-panel',
};

export default AnimController;
