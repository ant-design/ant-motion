import React from 'react';
import ReactDOM from 'react-dom';

import motionTool from '../../tool/';

import Header from '../../element/nav1/Header';
import Banner from '../../element/banner1/Banner';
import Page1 from '../../element/page1/Page';
import Page2 from '../../element/page2/Page';
import Page3 from '../../element/page3/Page';
import Page4 from '../../element/page4/Page';
import Footer from '../../element/footer1/Footer';

import '../../common/ant-d.less';

import config from './webdefault.config.js';

const Components = [
  { name: 'nav', comp: Header },
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
        { ...props, id: Component.name, key: Component.name + (props.dateNow || 0) }
      );
    });
    return (<setction className="content-wap">
      {childrenToRender}
    </setction>);
  }
}

const Demo = motionTool(config)(Index);

ReactDOM.render(<Demo />, document.getElementById('react-content'));
