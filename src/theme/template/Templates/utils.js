export function getURLData(name, url) {
  const myUrl = decodeURIComponent(url || location.hash || '').replace('#', '');
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = myUrl.match(reg);
  return r ? r[2] : null;
}

// 合并到 template里的数据
const mergeURLDataChild = (configData, dataItem, key) => {
  const mergeChild = (config, item, childKey) => {
    const myItem = item;
    if (myItem.the === 'style') {
      const uint = config.replace(/[^a-z|%]/g, '');
      myItem.value = `${parseFloat(config)}${(uint || 'px')}`;
      return;
    }
    myItem.value[childKey].value = config[childKey];
  };
  dataItem.forEach(item => {
    if (item.key === key) {
      Object.keys(configData[key]).forEach(mergeChild.bind(this, configData[key], item));
    }
  });
};
export function mergeURLDataToConfig(data, config) {
  if (!config) {
    return data;
  }
  Object.keys(config).forEach(key => {
    const name = key.replace(/[^a-z]/g, '');
    const id = key.replace(/[a-z]/g, '');
    const dataItem = data[name].data[id].dataSource;
    Object.keys(config[key]).forEach(mergeURLDataChild.bind(this, config[key], dataItem));
  });
  return data;
}

export function ping(url, callback) {
  const img = new Image();
  let done;
  const finish = (status) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
}
