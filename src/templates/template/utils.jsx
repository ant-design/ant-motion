import deepCopy from 'deepcopy';
import toStyle from 'to-style';

const toStyleString = toStyle.string;

const colorLookup = {
  aqua: 1,
  lime: 1,
  silver: 1,
  black: 1,
  maroon: 1,
  teal: 1,
  blue: 1,
  navy: 1,
  white: 1,
  fuchsia: 1,
  olive: 1,
  yellow: 1,
  orange: 1,
  gray: 1,
  purple: 1,
  green: 1,
  red: 1,
  pink: 1,
  cyan: 1,
  transparent: 1,
};

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

/* export function ping(url, callback) {
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
 }*/


export function getRect(dom) {
  return {
    width: dom.outerWidth(),
    height: dom.outerHeight(),
    top: dom.offset().top,
    left: dom.offset().left,
  };
}

function setProps(_data, key) {
  const item = _data[key];
  const data = _data;
  if (typeof item !== 'object') {
    return;
  }
  if ('value' in item) {
    if (key === 'backgroundImage') {
      data[key] = `url(${item.value})`;
    } else {
      data[key] = item.value;
    }
  } else {
    Object.keys(data[key]).forEach(setProps.bind(this, data[key]));
  }
}

export function dataValueReplace(data) {
  if (!data) {
    return {};
  }
  Object.keys(data).forEach(setProps.bind(this, data));
  return data;
}

export function isColorFuc(v) {
  return /^rgb\(|rgba\(|hex\(/.test(v) ||
    /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(v) ||
    v in colorLookup;
}

export function styleToCssString(_obj) {
  const strObj = {};
  const obj = _obj || {};
  Object.keys(obj).forEach((key) => {
    const item = obj[key];
    if (typeof item === 'object') {
      delete obj[key];
      strObj[key] = toStyleString(item.stylePhone || item.style);
    }
  });
  if (Object.keys(obj).length) {
    strObj.default = toStyleString(obj);
  }
  return strObj;
}
