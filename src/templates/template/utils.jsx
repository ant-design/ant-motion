import deepCopy from 'deepcopy';

export function getURLData(name, url) {
  const myUrl = decodeURIComponent(url || window.location.hash || '').replace('#', '');
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = myUrl.match(reg);
  return r ? r[2] : null;
}

function mergeURLDataChild(_data, newData, key) {
  const data = _data;
  if (typeof newData[key] === 'object') {
    Object.keys(newData[key]).forEach(mergeURLDataChild.bind(this, data[key], newData[key]));
  } else {
    data[key].value = newData[key];
  }
}

export function mergeURLDataToDefault(urlData, defaultData) {
  if (!urlData) {
    return deepCopy(defaultData.dataSource);
  }
  const data = deepCopy(defaultData.dataSource);
  Object.keys(data).forEach((key) => {
    const newData = urlData[key];
    if (newData) {
      Object.keys(newData).forEach(mergeURLDataChild.bind(this, data[key], newData));
    }
  });
  return data;
}

export function ping(url, callback) {
  const img = new window.Image();
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
