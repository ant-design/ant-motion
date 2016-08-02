import { getURLData } from '../utils';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import less from '../assets/lessToString';
import otherComp from '../other/otherToString';

const templateStrObj = {
  JS: {},
  PROPS: {},
  LESS: {},
  OTHER: {
    index: otherComp.index,
    documentation: otherComp.documentation,
  },
};

const getValueToString = (vars) => {
  const t = {};
  Object.keys(vars).forEach(key => {
    t[key] = vars[key].value;
  });
  return JSON.stringify(t, null).replace(/"/g, "'").replace(/'([^']+?)':/g, '$1:')
    .replace(/,/g, `,
        `).replace('{', `{
        `).replace('}', `,
      }`)
};

const dataSourceToString = (key, item) => {
  const itemKey = item.key;
  const vars = item.the === 'style' ? item.value : getValueToString(item.value);
  // 用props传入，不再替换文件
  /*
   const repStr = `${itemKey}: ${vars},`;
   let rep;
   if (item.the !== 'style') {
   rep = new RegExp(`${itemKey}:([\\s\\S]+?)},`, 'ig');
   templateStrObj.JS[key] = templateStrObj.JS[key].replace(rep, repStr);
   } else {
   rep = new RegExp(`${itemKey}:\\s([^,]+?),`, 'ig');
   const c = templateStrObj.JS[key].match(/style:\s\{([\s\S]+?)},/)[0].replace(rep, repStr);
   templateStrObj.JS[key] = templateStrObj.JS[key].replace(/style:\s\{([\s\S]+?)},/, c)
   }
   */
  // props 传入
  const repStr = `${itemKey}: ${item.the === 'style' && typeof vars === 'string' ?
    `'${vars}'` : vars},`;
  if (item.the !== 'style') {
    templateStrObj.PROPS[key] = templateStrObj.PROPS[key].replace('&data&', `${repStr}
      &data&`);
  } else {
    templateStrObj.PROPS[key] = templateStrObj.PROPS[key].replace('&style&', `${repStr}
      &style&`);
  }
};

const setMountPotion = () => {
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('componentDidMount() {', `componentDidMount() {
    // 点的位置居中
    const list = ReactDOM.findDOMNode(this.refs.list);
    const listHeight = list.getBoundingClientRect().height;
    list.style = \`margin-top: -\$\{listHeight / 2\}px\`;`);
};

const setScrollScreen = () => {
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('componentDidMount() {', `componentDidMount() {
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });`);
};

const jsToZip = () => {
  const zip = new JSZip();
  Object.keys(templateStrObj.JS).forEach(key => {
    const keys = key.split('_');
    zip.file(`${keys[0]}${keys[1]}.jsx`, templateStrObj.JS[key]);
  });
  Object.keys(templateStrObj.OTHER).forEach(key => {
    if (key === 'documentation') {
      zip.file(`${key}.text`, templateStrObj.OTHER[key]);
      return
    }
    zip.file(`${key}.jsx`, templateStrObj.OTHER[key]);
  });
  Object.keys(templateStrObj.LESS).forEach(key => {
    const keys = key.split('_');
    zip.file(`less/${keys[0]}${keys[1]}.less`, templateStrObj.LESS[key]);
  });
  Object.keys(less).forEach(key => {
    zip.file(`less/${key}.less`, less[key]);
  });
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'home.zip');
  })
};

const setChildrenToIndex = () => {
  let importStr = '';
  let childStr = 'const children = [\n';
  let propsStr = 'const props = [\n';
  Object.keys(templateStrObj.JS).sort((a, b) =>
    a.split('_')[2] > b.split('_')[2]
  ).forEach((key, i) => {
    const keys = key.split('_');
    const compStr = keys[0].replace(/\b(\w)|\s(\w)/g, function (m) {
      return m.toUpperCase();
    });
    const currentStr = `import ${compStr}${keys[1]} from './${keys[0]}${keys[1]}';\n`;
    importStr = importStr.replace(currentStr, '');
    importStr += currentStr;
    propsStr += `  // ${key} 区域\n  ${templateStrObj.PROPS[key]},\n`;
    childStr += `      <${compStr}${keys[1]} key="${key}" name="${key}" {...props[${i}]} />,\n`;
  });
  if ('point' in templateStrObj.OTHER) {
    importStr += `import Point from './point';\n`;
    const dataStr = `['${Object.keys(templateStrObj.JS)}']`.replace(/,/g, '\', \'');
    childStr += `      <Point key="list" ref="list" data={${dataStr}} />,\n`;
  }
  childStr += '    ];';
  propsStr += '];';
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('$import', importStr);
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('$children', childStr);
  templateStrObj.OTHER.index = templateStrObj.OTHER.index
    .replace('$props', propsStr);
};

export default function saveJsZip(config) {
  const pageData = getURLData('t').split(',');
  const otherData = getURLData('o').split(',');
  let isNav;
  pageData.forEach(key => {
    const keys = key.split('_');
    const comp = config[keys[0]].data[keys[1]];
    isNav = keys[0] === 'nav';
    const dataSource = comp.dataSource;
    templateStrObj.JS[key] = comp.templateStr
      .replace('./index.less', `./less/${keys[0]}${keys[1]}.less`);
    templateStrObj.LESS[key] = comp.less
      .replace('../../../../static/custom.less', './custom.less');
    templateStrObj.PROPS[key] = `{
    style: {
      &style&
    },
    dataSource: {
      &data&
    },
  }`;
    if (isNav && otherData.indexOf('fixed') >= 0) {
      templateStrObj.PROPS[key] = templateStrObj.PROPS[key].replace('&style&', `position: 'fixed',
      &style&`)
    }
    dataSource.forEach(dataSourceToString.bind(this, key));
    templateStrObj.PROPS[key] = templateStrObj.PROPS[key]
      .replace(/(.*)(\&style\&|\&data\&)(.*)\n/g, '');
  });
  otherData.forEach(key => {
    switch (key) {
      case 'point':
      {
        templateStrObj.OTHER[key] = otherComp[key];
        setMountPotion();
        break;
      }
      case 'full':
      {
        setScrollScreen();
        break;
      }
      default:
      {
        break;
      }
    }
  });
  // 替换首页里的children；
  setChildrenToIndex();
  // 保存面页;
  jsToZip();
}

