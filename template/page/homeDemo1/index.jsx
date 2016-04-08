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

import config from './webdefault.config.js';

const Components = [
  { name: 'header', comp: Header },
  { name: 'banner', comp: Banner },
  { name: 'page1', comp: Page1 },
  { name: 'page2', comp: Page2 },
  { name: 'page3', comp: Page3 },
  { name: 'page4', comp: Page4 },
  { name: 'footer', comp: Footer },
];

class Index extends React.Component {
  render() {
    const childrenToRender = Components.map(Component => {
      const props = this.props[Component.name] || {};
      return React.createElement(
        Component.comp,
        { ...props, key: Component.name + (props.dateNow || 0) }
      );
    });
    return (<setction className="content-wap">
      {childrenToRender}
    </setction>);
  }
}

const Demo = motionTool(config)(Index);

ReactDOM.render(<Demo />, document.getElementById('react-content'));
