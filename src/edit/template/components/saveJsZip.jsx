import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import deepCopy from 'deepcopy';
import { dataToArray } from '../utils';
import webData from '../../../templates/template.config';
import less from '../../../templates/static/lessToString';
import otherComp from '../../../templates/template/other/otherToString';
import { dataValueReplace, getWebOrPhoneCss, getStyleToString } from '../../../templates/template/utils';

const templateStrObj = {
  JS: {},
  LESS: {},
  stylePhone: '',
  styleWeb: '',
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
    if (key === 'style' || key === 'stylePhone') {
      /* if (urlItem) {
       configData[key] = urlItem;
       } else {
       delete configData[key];
       } */
      delete configData[key];
    } else {
      Object.keys(item).forEach(replaceData.bind(this, urlItem, item));
    }
  } else if (key === 'name') {
    delete configData[key];
  } else {
    const urlItem = urlData && urlData[key];

    configData[key] = urlItem || configData[key];
    /* configData[key] = configData[key].match(isImg) ?
     `<img width="100%" src="${configData[key]}" />` : configData[key]; */
  }
  if (typeof item === 'object' && !Object.keys(item).length) {
    delete configData[key];
  }
};
const imgAndStyleToTag = (data, key) => {
  const item = data[key];
  if (typeof item.children === 'string' && item.children.match(isImg)) {
    item.children = `<img width="100%" src="${item.children}" />`;
  }
  if (item.style) {
    item.style = `style={${getValueToString(item.style)}}`;
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
    // const wData = mergeURLDataToDefault(cData[key], item);
    const wData = dataValueReplace(deepCopy(webData[id].dataSource));
    // 遍历子级
    Object.keys(wData).forEach(replaceData.bind(this, cData && cData[key], wData));
    // 把一级下的 img 换成标签；
    Object.keys(wData).forEach(imgAndStyleToTag.bind(this, wData));
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
      zip.file(`${key}.md`, templateStrObj.OTHER[key]);
      return;
    }
    zip.file(`${key === 'index' ? key : toUpperCase(key)}.jsx`, templateStrObj.OTHER[key]);
  });

  // 编辑样式添加
  templateStrObj.styleWeb = templateStrObj.styleWeb ?
    `\n@media screen and (min-width: 768px) {\n${templateStrObj.styleWeb}}` :
    templateStrObj.styleWeb || '';
  templateStrObj.styleWeb += templateStrObj.stylePhone ?
    `\n@media screen and (max-width: 767px) {\n${templateStrObj.stylePhone}}` : '';
  zip.file('less/edit.css', templateStrObj.styleWeb);

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
    zip.file(`less/${key}.less`, templateStrObj.LESS[key].value);
    indexLessStr += `@import './${key}.less';\n`;
  });
  indexLessStr += '@import \'./edit.css\';';
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
    childStr += `      <${item.name} id="${key}" key="${key}" isMobile={this.state.isMobile}/>,\n`;
  });
  if ('point' in templateStrObj.OTHER) {
    // 点转换
    importStr += 'import Point from \'./Point\';\n';
    const ids = Object.keys(templateStrObj.JS).map(key => templateStrObj.JS[key].key)
      .filter(key => !key.match(/nav|footer/i));
    const dataStr = ids.length ? `['${ids}']`.replace(/,/g, '\', \'') : null;
    if (dataStr) {
      childStr += '      // 导航和页尾不进入锚点区，如果需要，自行添加;\n';
      childStr += `      <Point key="list" ref="list" data={${dataStr}} />,\n`;
    }
  }
  childStr += '    ];';
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('&import&', importStr);
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('&children&', childStr);
};

const setEditCss = (id, data) => {
  Object.keys(data).forEach((key) => {
    const item = data[key];
    const names = key.split('_');
    const childrenName = names[1];
    const cssName = `#${id}${childrenName ? `-${childrenName}` : ''}`;
    if (item) {
      const styleObj = {};
      Object.keys(item).forEach(getWebOrPhoneCss.bind(this, item, styleObj));
      if (styleObj.stylePhone) {
        templateStrObj.stylePhone += getStyleToString(cssName, styleObj.stylePhone);
      }
      if (styleObj.style) {
        templateStrObj.styleWeb += getStyleToString(cssName, styleObj.style);
      }
    }
  });
};

export default function saveJsZip(urlData) {
  const pageData = deepCopy(urlData.t);
  const otherData = urlData.o;
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
    templateStrObj.JS[key] = {
      i, id, key, name: caseKey, value: templateStr,
    };
    // 去重复 less;
    templateStrObj.LESS[caseKey.toLowerCase()] = { id, value: cLess };
  });
  // less 去重;
  const lessIdArray = Object.keys(templateStrObj.LESS).map((key) => {
    const item = templateStrObj.LESS[key];
    return item.id;
  });
  Object.keys(templateStrObj.LESS).forEach((key, i) => {
    const item = templateStrObj.LESS[key];
    const id = item.id;
    const tArr = lessIdArray.filter(tKey => tKey === id);
    if (tArr.length > 1 && lessIdArray.indexOf(id) !== i) {
      delete templateStrObj.LESS[key];
    }
  });
  // 更改过的数据替换到JS里；
  setUrlDataToTemplateStr(urlData.c, pageData);
  // 其它数据保存;
  dataToArray(otherData).forEach((key) => {
    switch (key) {
      case 'point':
        templateStrObj.OTHER[key] = otherComp[key];
        break;
      case 'full':
        setScrollScreen();
        break;
      default:
        break;
    }
  });
  // 编辑过的样式保存。。urlData.c;
  const editData = urlData.c;
  templateStrObj.stylePhone = '';
  templateStrObj.styleWeb = '';
  if (editData) {
    Object.keys(editData).forEach((id) => {
      const item = editData[id];
      if (typeof item === 'object') {
        setEditCss(id, item);
      }
    });
  }

  // 替换首页里的children；
  setChildrenToIndex();
  // 保存面页;
  jsToZip();
}
