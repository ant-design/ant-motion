import React, { PropTypes } from 'react';
// import Animate from 'rc-animate';
import TweenOne from 'rc-tween-one';
import assign from 'object-assign';
import Common from './Common';
import { Input, Button, Icon } from 'antd';
function noop() {
}
class TextController extends Common {
  constructor() {
    super(...arguments);
    this.state = {
      config: this.props.stateConfig,
      childId: this.props.childId,
    };
    [
      'getTextContent',
      'changeValue',
      'addOrRemoveTextContent',
      'removeURLData',
      'convertValue',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  removeURLData(name, key) {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const config = JSON.parse(url.split('=')[1] || '{}');
    const childIdItem = config[this.state.childId] || {};
    delete childIdItem[name][key];
    delete childIdItem[name][`${key}remove`];
    config[this.state.childId] = childIdItem;
    const configString = JSON.stringify(config);
    location.hash = `#config=${encodeURIComponent(configString)}`;
  }

  convertValue(_data) {
    const data = assign({}, _data);
    Object.keys(data).forEach(key => {
      data[key] = data[key].value;
    });
    return data;
  }

  addOrRemoveTextContent(data, name, bool) {
    const key = data.key;
    let removeObject = {};
    removeObject[key] = typeof data.value === 'object' ? this.convertValue(data.value) : data.value;
    if (bool) {
      removeObject[`${key}remove`] = true;
      this.setURLConfig(name, removeObject);
    } else {
      this.removeURLData(name, data.key);
    }
    this.props.callBack();
  }

  getTextContent(data, i) {
    let type;
    let child;
    if (typeof data.value === 'object') {
      const table = Object.keys(data.value).map((key, ii) => {
        const _data = data.value[key];
        type = _data.value.length >= 50 ? 'textarea' : 'text';
        return <li key={ii}>
          <p>{_data.name}</p>
          <div>
            <Input type={type} placeholder={_data.value}
              onChange={this.changeValue.bind(this, `${data.key}&>${key}`, 'dataSource')} />
          </div>
        </li>
      });
      child = (<div className="data-table" visible key="111">
        <ul>
          {table}
        </ul>
      </div>)
    } else {
      type = data.value.length >= 50 ? 'textarea' : 'text';
      child = (<div visible key="111">
        <Input type={type} placeholder={data.value}
          onChange={this.changeValue.bind(this, data.key, 'dataSource')} />
      </div>);
    }
    const addOrRemove = data[`${data.key}remove`] ? false : true;
    console.log(data)
    return (<li key={i}>
      <h4>{data.name}
        <a onClick={this.addOrRemoveTextContent.bind(this, data, 'dataSource', addOrRemove)}
          className="data-cross-button"
        >
          {addOrRemove ? <Icon type="cross-circle-o" /> : <Icon type="plus-circle-o" />}
        </a>
      </h4>
      <div className="data-table-mask">
        <TweenOne component="div" key={i}
          animation={{ marginTop: data[`${data.key}remove`] ? -400 : 0, ease: data[`${data.key}remove`] ? 'easeInCirc' : 'easeOutCirc' }}>
          {child}
        </TweenOne>
      </div>
    </li>);
  }

  render() {
    const textContent = this.props.data.map(this.getTextContent);
    return (
      <div className="tool-data-panel" visible>
        <h3><Icon type="copy" />内容编辑</h3>
        <ul>
          {textContent}
        </ul>
        <Button type="primary" size="small"
          onClick={this.clickMake.bind(this, 'dataSource',this.props.callBack)}>保存</Button>
      </div>
    );
  }
}

TextController.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  childId: PropTypes.string,
  stateConfig: PropTypes.object,
  callBack: PropTypes.func,
};

TextController.defaultProps = {
  className: 'tool-data-panel',
  callBack: noop,
};

export default TextController;
