import React from 'react';
import assign from 'object-assign';
class Common extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {};
    this.config = {};
    [
      'getURLConfig',
      'getURLData',
      'clickMake',
      'setURLConfig',
      'changeValue',
      'convertValue',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  getURLData(name) {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = url.match(reg);
    return r ? unescape(r[2]) : null;
  }

  getURLConfig(config) {
    const urlConfig = JSON.parse(this.getURLData('config') || '{}');
    const _config = assign({}, config);
    // 大类,如banner
    Object.keys(urlConfig).forEach(key => {
      const item = urlConfig[key];
      // 二级,如variables
      Object.keys(item).forEach(_key => {
        const _item = item[_key];
        const configChild = assign({}, _config[key]);
        if (typeof _item !== 'object') {
          configChild[_key] = item[_key];
        }
        // 三级,如delay
        Object.keys(_item).forEach(childKey => {
          let configForKeyData = configChild[_key];
          configForKeyData = configForKeyData.map(childItem => {
            const assignChildItem = assign({}, childItem);
            if (childItem.key === childKey) {
              if (typeof _item[childKey] === 'object') {
                const _itemValue = assign({}, assignChildItem.value);
                Object.keys(_item[childKey]).forEach(_itemKey => {
                  const _itemValueKey = assign({}, _itemValue[_itemKey]);
                  _itemValueKey.value = _item[childKey][_itemKey];
                  _itemValue[_itemKey] = _itemValueKey;
                  // 保存修改过的东西
                  // _itemValue[key].value = item[childKey][key]
                });
                assignChildItem.value = _itemValue;
              } else if (_item[childKey]) {
                // 这里存不住,,恢复默认;
                assignChildItem.value = _item[childKey];
              }
            }
            return assignChildItem;
          });
          configChild[_key] = configForKeyData;
        });
        _config[key] = configChild;
      });
    });
    return _config;
  }

  setURLConfig(name, item, dateNow) {
    const configStr = this.getURLData('config');
    const config = JSON.parse(configStr || '{}');
    const childIdItem = config[this.state.childId] || {};
    if (dateNow) {
      childIdItem.dateNow = dateNow;
    }
    childIdItem[name] = childIdItem[name] || {};
    Object.keys(item).forEach(key => {
      if (item[key] && typeof item[key] === 'object') {
        childIdItem[name][key] = childIdItem[name][key] || {};
        Object.keys(item[key]).forEach(_key => {
          if (item[key][_key]) {
            childIdItem[name][key][_key] = item[key][_key];
          }
        });
      } else if (item[key]) {
        childIdItem[name][key] = item[key];
      }
    });

    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const reg = new RegExp(`(^|&)config=${configStr}`, 'i');
    const otherUrl = (url.replace(reg, '').split('&') || []).filter(_item => _item).join('&');
    config[this.state.childId] = childIdItem;
    const configString = JSON.stringify(config);
    location.hash = `#config=${encodeURIComponent(configString)}${otherUrl ? `&${otherUrl}` : ''}`;
  }

  convertValue(_data) {
    const data = assign({}, _data);
    Object.keys(data).forEach(key => {
      data[key] = data[key].value;
    });
    return data;
  }

  clickMake(name) {
    // Header 怎么获取....
    const configChild = this.config[this.state.childId] || {};
    const item = configChild[name];
    if (item) {
      const dateNow = name === 'variables' ? Date.now() : null;
      this.setURLConfig(name, item, dateNow);
      this.config[this.state.childId][name] = {};
    }
  }

  changeValue(_key, name, e) {
    const keys = _key.split('&>');
    const dom = e.target;
    const configChild = this.config[this.state.childId] = this.config[this.state.childId] || {};
    const key = keys[0];
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
