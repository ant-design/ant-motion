import React from 'react';
import ReactDOM from 'react-dom';

import motionTool from '../../tool/';

import Header from './Header';

import '../../common/ant-d.less';

import config from './webdefault.config';

const Components = [
  { name: 'data', comp: Header },
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
