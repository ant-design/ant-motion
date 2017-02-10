import deepCopy from 'deepcopy';

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

// 增加 phoneStyle;
function addPhoneStyleToData(data) {
  const dataSource = data.dataSource;
  Object.keys(dataSource).forEach((key) => {
    const item = dataSource[key];
    if (typeof item === 'object' && !('stylePhone' in item) && 'style' in item) {
      item.stylePhone = deepCopy(item.style);
    }
  });
}
addPhoneStyleToData(Nav0);
addPhoneStyleToData(Nav1);
addPhoneStyleToData(Content0);
addPhoneStyleToData(Content1);
addPhoneStyleToData(Content2);
addPhoneStyleToData(Content3);
addPhoneStyleToData(Content4);
addPhoneStyleToData(Content5);
addPhoneStyleToData(Content6);
addPhoneStyleToData(Content7);
addPhoneStyleToData(Content8);
addPhoneStyleToData(Content9);
addPhoneStyleToData(Footer0);
addPhoneStyleToData(Footer1);
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
