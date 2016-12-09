import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import deepCopy from 'deepcopy';
import { dataToArray } from '../utils';
import config from '../../../templates/template.config';
import less from '../../../templates/static/lessToString';
import otherComp from '../../../templates/template/other/otherToString';
import { dataValueReplace } from '../../../templates/template/utils';

let webData;
const templateStrObj = {
  JS: {},
  LESS: {},
  OTHER: {
    index: otherComp.index,
    documentation: otherComp.documentation,
  },
};

const isImg = /\.(gif|jpg|jpeg|png|svg|JPG|PNG|GIF|JPEG|SVG)$/;

const getValueToString = vars =>
  JSON.stringify(vars, null)
    .replace(/"/g, "'")
    .replace(/'([^']+?)':/g, '$1: ')
    .replace(/,/g, ', ')
    .replace(/{/g, '{ ')
    .replace(/}/g, ' }');


const toUpperCase = string => string.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
const setMountPotion = () => {
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('componentDidMount() {', `componentDidMount() {
    // 点的位置居中
    const list = ReactDOM.findDOMNode(this.refs.list);
    const listHeight = list.getBoundingClientRect().height;
    list.style.marginTop = \` -\$\{listHeight / 2\}px\`;`);
};

const setScrollScreen = () => {
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('componentDidMount() {', `componentDidMount() {
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });`);
};

const replaceData = (urlData, _configData, key) => {
  const configData = _configData;
  const item = configData[key];
  if (typeof item === 'object') {
    const urlItem = urlData && urlData[key];
    if (key === 'style') {
      if (urlItem) {
        configData[key] = urlItem;
      } else {
        delete configData[key];
      }
    } else {
      Object.keys(item).forEach(replaceData.bind(this, urlItem, item));
    }
  } else if (key === 'name') {
    delete configData[key];
  } else {
    const urlItem = urlData && urlData[key];

    configData[key] = urlItem || configData[key];
    /* configData[key] = configData[key].match(isImg) ?
     `<img width="100%" src="${configData[key]}" />` : configData[key];*/
  }
  if (typeof item === 'object' && !Object.keys(item).length) {
    delete configData[key];
  }
};
const imgToTag = (data, key) => {
  const item = data[key];
  if (typeof item.children === 'string' && item.children.match(isImg)) {
    item.children = `<img width="100%" src="${item.children}" />`;
  }
};

const replaceValue = (_value, replaceDataArray, data) => {
  let value = _value;
  replaceDataArray.forEach((key) => {
    const ids = key.split('-');
    const id = ids[0].replace(/\&/g, '');
    if (id in data) {
      const cId = ids[1] && ids[1].replace(/\&/g, '');
      const item = cId ? data[id][cId] : data[id];
      if (item) {
        const dataStr = typeof item === 'object' ? getValueToString(item) : item;
        value = value.replace(key, dataStr);
      } else {
        const rep = new RegExp(`\\s+${key}\\n`);
        value = value.replace(rep, '\n');
      }
    } else {
      const rep = new RegExp(`\\s+${key}\\n`);
      value = value.replace(rep, '\n');
    }
  });
  return value;
};

const setUrlDataToTemplateStr = (cData, pageData) => {
  const pData = pageData;
  pData.forEach((key) => {
    const id = templateStrObj.JS[key].id;
    const item = webData[id];
    // const wData = mergeURLDataToDefault(cData[key], item);
    const wData = dataValueReplace(item.dataSource);
    // 遍历子级
    Object.keys(wData).forEach(replaceData.bind(this, cData[key], wData));
    // 把一级下的 img 换成标签；
    Object.keys(wData).forEach(imgToTag.bind(this, wData));
    const value = templateStrObj.JS[key].value;
    const replaceDataArray = value.match(/\&.*\&/ig).filter(cKey => cKey.replace(/\&/g, ''));
    templateStrObj.JS[key].value = replaceValue(value, replaceDataArray, wData);
  });
};

const jsToZip = () => {
  const zip = new JSZip();
  Object.keys(templateStrObj.JS).forEach((key) => {
    zip.file(`${templateStrObj.JS[key].name}.jsx`, templateStrObj.JS[key].value);
  });
  Object.keys(templateStrObj.OTHER).forEach((key) => {
    if (key === 'documentation') {
      zip.file(`${key}.text`, templateStrObj.OTHER[key]);
      return;
    }
    zip.file(`${key === 'index' ? key : toUpperCase(key)}.jsx`, templateStrObj.OTHER[key]);
  });
  // 创建 less 里的 index.js;
  let indexLessStr = '';
  Object.keys(less).forEach((key) => {
    if (key === 'point' && !('point' in templateStrObj.OTHER)) {
      return;
    }
    indexLessStr += `@import './${key}.less';\n`;
    zip.file(`less/${key}.less`, less[key]);
  });
  Object.keys(templateStrObj.LESS).forEach((key) => {
    zip.file(`less/${key}.less`, templateStrObj.LESS[key]);
    indexLessStr += `@import './${key}.less';\n`;
  });
  zip.file('less/antMotion_style.less', indexLessStr);
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'Home.zip');
  });
};

const setChildrenToIndex = () => {
  let importStr = '';
  let childStr = 'const children = [\n';
  const jsData = templateStrObj.JS;
  Object.keys(jsData).sort((a, b) => {
    const aItem = jsData[a];
    const bItem = jsData[b];
    return aItem.i > bItem.i;
  }).forEach((key) => {
    const item = jsData[key];
    importStr += `import ${item.name} from './${item.name}';\n`;
    childStr += `      <${item.name} id="${key}" key="${key}"/>,\n`;
  });
  if ('point' in templateStrObj.OTHER) {
    importStr += 'import Point from \'./Point\';\n';
    const dataStr = `['${Object.keys(templateStrObj.JS)}']`.replace(/,/g, '\', \'');
    childStr += `      <Point key="list" ref="list" data={${dataStr}} />,\n`;
  }
  childStr += '    ];';
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('&import&', importStr);
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('&children&', childStr);
};

export default function saveJsZip(urlData) {
  const pageData = deepCopy(urlData.t);
  const otherData = urlData.o;
  webData = deepCopy(config);
  let contentNum = 0;
  dataToArray(pageData).forEach((key, i) => {
    const keys = key.split('_');
    let caseKey = `${toUpperCase(keys[0])}${keys[1]}`;
    const id = caseKey;
    const templateStr = webData[caseKey].templateStr;
    const cLess = webData[caseKey].less
      .replace('../../../static/custom.less', './custom.less');
    caseKey = key.match(/(nav)|(footer)/) ? toUpperCase(keys[0]) : caseKey;
    if (key.match(/content/)) {
      caseKey = `${toUpperCase(keys[0])}${contentNum}`;
      contentNum += 1;
    }
    templateStrObj.JS[key] = { i, id, name: caseKey, value: templateStr };
    templateStrObj.LESS[caseKey.toLowerCase()] = cLess;
  });
  // 更改过的数据替换到JS里；
  setUrlDataToTemplateStr(urlData.c, pageData);
  // 其它数据保存;
  dataToArray(otherData).forEach((key) => {
    switch (key) {
      case 'point':
        templateStrObj.OTHER[key] = otherComp[key];
        setMountPotion();
        break;
      case 'full':
        setScrollScreen();
        break;
      default:
        break;
    }
  });
  // 替换首页里的children；
  setChildrenToIndex();
  // 保存面页;
  jsToZip();
}
