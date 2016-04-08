import React, { PropTypes } from 'react';
import Animate from 'rc-animate';
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
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  removeURLData(name, key) {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const config = JSON.parse(url.split('=')[1] || '{}');
    const childIdItem = config[this.state.childId] || {};
    delete childIdItem[name][key];
    config[this.state.childId] = childIdItem;
    const configString = JSON.stringify(config);
    location.hash = `#config=${encodeURIComponent(configString)}`;
  }

  addOrRemoveTextContent(data, name, bool) {
    const key = data.key;
    const removeObject = {};
    removeObject[key] = '$remove';
    if (bool) {
      this.setURLConfig(name, removeObject);
    } else {
      this.removeURLData(name, data.key);
    }
    this.props.callBack('dataSource');
  }

  getTextContent(data, i) {
    let type;
    let child;
    if (typeof data.value === 'object') {
      const table = Object.keys(data.value).map((key, ii) => {
        const _data = data.value[key];
        type = _data.key === 'content' ? 'textarea' : 'text';
        const changeValue = this.changeValue.bind(this, `${data.key}&>${key}`, 'dataSource');
        return (<li key={ii}>
          <p>{_data.name}</p>
          <div>
            <Input type={type} placeholder={_data.value}
              onChange={changeValue}
            />
          </div>
        </li>);
      });

      child = (<div className="data-table" visible key="111">
        <ul>
          {table}
        </ul>
      </div>);
    } else {
      type = data.key === 'content' ? 'textarea' : 'text';
      const changeValue = this.changeValue.bind(this, data.key, 'dataSource');
      child = (<div visible key="111">
        <Input type={type} placeholder={data.value}
          onChange={changeValue}
        />
      </div>);
    }
    const addOrRemove = data.value === '$remove' ? false : true;
    const onAddOrRemove = this.addOrRemoveTextContent.bind(this, data, 'dataSource', addOrRemove);
    return (<li key={i}>
      <h4>{data.name}
        <a onClick={onAddOrRemove}
          className="data-cross-button"
        >
          <Icon
            type="cross-circle-o"
            className={addOrRemove ? '' : 'add'}
          />
        </a>
      </h4>
      <div className="data-table-mask">
        <Animate component="div" key={i} showProp="visible" transitionName="zoom-up-margin">
          {addOrRemove ? child : null}
        </Animate>
      </div>
    </li>);
  }

  render() {
    const textContent = this.props.data.map(this.getTextContent);
    const clickMake = this.clickMake.bind(this, 'dataSource', this.props.callBack);
    return (
      <div className="tool-data-panel" visible>
        <h3><Icon type="copy" />内容编辑</h3>
        <ul>
          {textContent}
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
