import React from 'react';
import ReactDOM from 'react-dom';

import motionTool from '../../tool/';

import Header from './component/Header';
import Banner from './component/Banner';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Footer from './component/Footer';

import '../../common/ant-d.less';
import './assets/index.less';

const Components = [
  { name: 'Header', comp: Header },
  { name: 'Banner', comp: Banner },
  { name: 'Page1', comp: Page1 },
  { name: 'Page2', comp: Page2 },
  { name: 'Page3', comp: Page3 },
  { name: 'Page4', comp: Page4 },
  { name: 'Footer', comp: Footer },
];

const config = {
  name: 'demoAnimation',
  version: '0.0.1',
};

// TODO: add file loader
// 主要配置分为2类,文案图片配置与参数配置
Components.forEach(Component => {
  config[Component.name] = Component.comp.config;
});

class Demo extends React.Component {
  render() {
    return <setction className='content-wap'>
      {
        Components.map((Component, i) => {
          return React.createElement(Component.comp, {...this.props[Component.name], key: i})
          })
        }
    </setction>
  }
}

Demo = motionTool(config)(Demo);

ReactDOM.render(<Demo />, document.getElementById('react-content'));
