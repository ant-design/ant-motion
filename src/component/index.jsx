import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/tomorrow.css';

class About extends React.Component {
  render() {
    return (<div >
      <h1>Ant Motion of React</h1>
      <p>这是 Ant Motion 的所有 React 组件的演示站点, 可结合 Ant Design 来实现更炫酷的页面结够.</p>
      <p>
        <img src="https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg" width="100" />
        <span style={{ fontSize: 50, margin: '0 10px' }}> Ant Motion</span>
      </p>
      <h2>特性</h2>
      <ul className="list">
        <li>简单方便又能快速的搭建出页面里的动画效果。</li>
        <li>React Component 上的动效组件。</li>
        <li>基于 npm + webpack + babel 的工作流，支持 ES2015。</li>
      </ul>
      <h2>理念</h2>
      <p style={{ maxWidth: 720 }}><img src="https://os.alipayobjects.com/rmsportal/IjqEyFKamUcapGY.png" width="100%" />
      </p>
      <h2>如何使用</h2>
      <p>每个组件单个安装, 如:</p>
      <div>
        <Highlight>
          {"$ npm install rc-tween-one"}
        </Highlight>
      </div>
      <h2>如何贡献</h2>
      <p>
        有任何建议或意见您可以
        <a href="https://github.com/ant-motion/ant-motion/pulls" target="_black">Pull Request</a>，或给我们
        <a href="https://github.com/ant-motion/ant-motion/issues" target="_black">提问</a>。
      </p>
    </div>);
  }
}

export default About;
