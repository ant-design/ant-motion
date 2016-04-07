import React, { PropTypes } from 'react';
import assign from 'object-assign';
class Common extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {};
    this.config = {};
    [
      'getURLConfig',
      'getConfig',
      'clickMake',
      'setURLConfig',
      'changeValue',
      'convertValue',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  convertValue(_data) {
    const data = assign({}, _data);
    Object.keys(data).forEach(key => {
      data[key] = data[key].value;
    });
    return data;
  }

  getConfig(name, item, config, childId, nowBool, childKey) {
    const configChild = assign({}, config[childId]);
    let configForKeyData = configChild[name];
    configForKeyData = configForKeyData.map(childItem => {
      const _item = assign({}, childItem);
      if (childItem.key === childKey) {
        if (typeof item[childKey] === 'object') {
          const _itemValue = assign({}, _item.value);
          Object.keys(item[childKey]).forEach(key => {
            const _itemValueKey = assign({}, _itemValue[key]);
            _itemValueKey.value = item[childKey][key];
            _itemValue[key] = _itemValueKey;
            // 保存修改过的东西
            // _itemValue[key].value = item[childKey][key]
          });
          _item.value = _itemValue;
        } else if (item[childKey]) {
          // 这里存不住,,恢复默认;
          _item.value = item[childKey];
        }
      }
      return _item;
    });
    configChild[name] = configForKeyData;

    if (name === 'variables' && nowBool) {
      configChild.dateNow = Date.now();
    }
    config[childId] = configChild;
  }

  getURLConfig(config) {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const urlConfig = JSON.parse(url.split('=')[1] || '{}');
    const _config = assign({}, config);
    // 大类,如banner
    Object.keys(urlConfig).forEach(key => {
      const item = urlConfig[key];
      // 二级,如variables
      Object.keys(item).forEach(_key => {
        const _item = item[_key];
        // 三级,如delay
        Object.keys(_item).forEach(this.getConfig.bind(this, _key, _item, _config, key, false));
      })
    });
    return _config;
  }

  setURLConfig(name, item) {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const config = JSON.parse(url.split('=')[1] || '{}');
    const childIdItem = config[this.state.childId] || {};
    childIdItem[name] = childIdItem[name] || {};
    // if (!item.remove) {
    Object.keys(item).forEach(key => {
      if (item[key] && typeof item[key] === 'object') {
        childIdItem[name][key] = childIdItem[name][key] || {};
        Object.keys(item[key]).forEach(_key => {
          childIdItem[name][key][_key] = item[key][_key];
        })
      } else if (item[key]) {
        childIdItem[name][key] = item[key];
      }
    });
    // }

    config[this.state.childId] = childIdItem;
    const configString = JSON.stringify(config);
    location.hash = `#config=${encodeURIComponent(configString)}`;
  }

  clickMake(name, callBack) {
    // Header 怎么获取....
    const config = this.state.config;
    const configChild = this.config[this.state.childId] || {};
    const item = configChild[name];
    if (item) {
      console.log(item.text)
      Object.keys(item).forEach(this.getConfig.bind(this, name, item, config, this.state.childId, true));
      this.setURLConfig(name, item);
      this.config[this.state.childId][name] = {};
      callBack();
    }
  }

  changeValue(_key, name, e) {
    const keys = _key.split('&>');
    const dom = e.target;
    const configChild = this.config[this.state.childId] = this.config[this.state.childId] || {};
    let key = keys[0];
    configChild[name] = configChild[name] || {};
    if (keys.length === 2) {
      configChild[name][keys[0]] = configChild[name][keys[0]] || {};
      configChild[name][keys[0]][keys[1]] = dom.value;
    } else {
      configChild[name][key] = dom.value;
    }

  }
}

export default Common;
