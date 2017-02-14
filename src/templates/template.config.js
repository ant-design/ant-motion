import deepCopy from 'deepcopy';

import { isColorFuc } from './template/utils';

const Nav0 = require('./template/element/Nav0/template.config');
const Nav1 = require('./template/element/Nav1/template.config');
const Content0 = require('./template/element/Content0/template.config');
const Content1 = require('./template/element/Content1/template.config');
const Content2 = require('./template/element/Content2/template.config');
const Content3 = require('./template/element/Content3/template.config');
const Content4 = require('./template/element/Content4/template.config');
const Content5 = require('./template/element/Content5/template.config');
const Content6 = require('./template/element/Content6/template.config');
const Content7 = require('./template/element/Content7/template.config');
const Content8 = require('./template/element/Content8/template.config');
const Content9 = require('./template/element/Content9/template.config');
const Footer0 = require('./template/element/Footer0/template.config');
const Footer1 = require('./template/element/Footer1/template.config');

function addTypeToStyle(d) {
  const data = d;
  Object.keys(data).forEach((key) => {
    const item = data[key];
    if (typeof item === 'object') {
      if ('value' in item) {
        const isNumber = parseFloat(item.value) || parseFloat(item.value) === 0;
        const isColor = isColorFuc(item.value);
        if (item.type) {
          return;
        }
        if (isNumber) {
          item.type = 'number';
        }
        if (isColor) {
          item.type = 'color';
        }
      } else {
        addTypeToStyle(item);
      }
    }
  });
}

// 增加 phoneStyle;
function addData(data) {
  const dataSource = data.dataSource;
  addTypeToStyle(dataSource);
  Object.keys(dataSource).forEach((key) => {
    const item = dataSource[key];
    if (typeof item === 'object' && !('stylePhone' in item) && 'style' in item) {
      item.stylePhone = deepCopy(item.style);
    }
  });
}

addData(Nav0);
addData(Nav1);
addData(Content0);
addData(Content1);
addData(Content2);
addData(Content3);
addData(Content4);
addData(Content5);
addData(Content6);
addData(Content7);
addData(Content8);
addData(Content9);
addData(Footer0);
addData(Footer1);
export default {
  Nav0,
  Nav1,
  Content0,
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
  Content7,
  Content8,
  Content9,
  Footer0,
  Footer1,
};
