import React from 'react';
import ReactDOM from 'react-dom';

import motionTool from '../../tool/';

import Page3 from './Page3';

import '../../common/ant-d.less';

import config from './webdefault.config.js';

const Components = [
  { name: 'page3', comp: Page3 },
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
