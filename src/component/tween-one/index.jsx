import React from 'react';
import Highlight from '../Highlight';
import DemoLayout, { Item } from '../DemoLayout';

import Position from './demo/position';
import Scale from './demo/scale';
import Rotate from './demo/rotate';
import Blur from './demo/blur';
import Timeline from './demo/timeline';
import Control from './demo/control';
import Bezier from './demo/bezier';


class Tween extends React.Component {
  render() {
    return (<div >
      <h1>TweenOne 单元素组件</h1>
      <iframe key="github-btn"
        src="https://ghbtns.com/github-btn.html?user=react-component&repo=tween-one&type=star&count=true"
        frameBorder="0" scrolling="0" width="98px" height="20px"
      />
      <p>这是个对单个元素做动效的组件，可以执行所有样式动画，包括3d，模糊等效果，还可以完成贝塞尔曲线动画。</p>
      <h2>何时使用</h2>
      <ul className="list">
        <li>在单个元素需要过渡到另外一点时使用。</li>
      </ul>
      <h2>怎么使用</h2>
      <h3>安装</h3>
      <div>
        <Highlight className="bash">
          {"$ npm install rc-tween-one --save"}
        </Highlight>
      </div>
      <h3>使用</h3>
      <div>
        <Highlight>
          {`import TweenOne from 'rc-tween-one';
ReactDOM.render(<TweenOne animation={{ x: 100 }} />, mountNode);`}
        </Highlight>
      </div>
      <h3>示例</h3>
      <DemoLayout col="8">
        <Item title={Position.title} content={Position.content} code={Position.mdString}>
          <Position.Comp />
        </Item>
        <Item title={Scale.title} content={Scale.content} code={Scale.mdString}>
          <Scale.Comp />
        </Item>
        <Item title={Rotate.title} content={Rotate.content} code={Rotate.mdString}>
          <Rotate.Comp />
        </Item>
        <Item title={Blur.title} content={Blur.content} code={Blur.mdString}>
          <Blur.Comp />
        </Item>
        <Item title={Timeline.title} content={Timeline.content} code={Timeline.mdString}>
          <Timeline.Comp />
        </Item>
        <Item title={Control.title} content={Control.content} code={Control.mdString}>
          <Control.Comp />
        </Item>
        <Item title={Bezier.title} content={Bezier.content} code={Bezier.mdString} col="24">
          <Bezier.Comp />
        </Item>
      </DemoLayout>
      <blockquote>
        <p><a href="http://react-component.github.io/tween-one/" target="_blank">查看更多 demo</a></p>
      </blockquote>
      <h2>API 说明</h2>
      <h4 className="bold">props</h4>
      <table className="api-table">
        <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>默认</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>animation</td>
          <td>object / array</td>
          <td>null</td>
          <td>需要执行动画的参数</td>
        </tr>
        <tr>
          <td>paused</td>
          <td>boolean</td>
          <td>false</td>
          <td>暂停动画</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td>boolean</td>
          <td>false</td>
          <td>倒放动画</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>null</td>
          <td>全局变动回调</td>
        </tr>
        <tr>
          <td>moment</td>
          <td>number</td>
          <td>null</td>
          <td>设置当前时间轴上的时间</td>
        </tr>
        <tr>
          <td>component</td>
          <td>string</td>
          <td><code>div</code></td>
          <td>需要替换的标签</td>
        </tr>
        </tbody>
      </table>
      <h4>animation = &#123; &#125;</h4>
      <blockquote>
        <p><code>transform</code> 需要设定设始值， 必需在 <code>style</code> 里设定</p>
      </blockquote>
      <table className="api-table">
        <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>默认</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>type</td>
          <td>string</td>
          <td><code>to</code></td>
          <td>播放类型，<code>to</code> 正常播放， <code>from</code> 反向播放</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>number</td>
          <td>450</td>
          <td>动画时间</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>number</td>
          <td>0</td>
          <td>动画延时</td>
        </tr>
        <tr>
          <td>repeat</td>
          <td>number</td>
          <td>0</td>
          <td>重复播放， -1 为无限重复播放</td>
        </tr>
        <tr>
          <td>repeatDelay</td>
          <td>number</td>
          <td>0</td>
          <td>每次重复播放开始时的延时</td>
        </tr>
        <tr>
          <td>yoyo</td>
          <td>boolean</td>
          <td>false</td>
          <td>重复时执行返回动画</td>
        </tr>
        <tr>
          <td>ease</td>
          <td>string</td>
          <td><code>easeInOutQuad</code></td>
          <td>缓动参数</td>
        </tr>
        <tr>
          <td>bezier</td>
          <td>object</td>
          <td>null</td>
          <td>贝赛尔曲线动画</td>
        </tr>
        </tbody>
      </table>
      <h4>animation = [ ] 时为 timeline</h4>
      <h4>bezier = &#123; &#125;</h4>
      <table className="api-table">
        <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>默认</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>type</td>
          <td>string</td>
          <td><cod>soft</cod></td>
          <td>
            <code>thru</code>,
            <code>soft</code>,
            <code>quadratic</code>,
            <code>cubic</code>
          </td>
        </tr>
        <tr>
          <td>autoRotate</td>
          <td>boolean</td>
          <td>false</td>
          <td>跟随位置旋转</td>
        </tr>
        <tr>
          <td>vars</td>
          <td>array</td>
          <td>null</td>
          <td>贝赛尔点的位置， 如 <code>&#123; x: 100, y: 100 &#125;</code></td>
        </tr>
        </tbody>
      </table>
      <blockquote>
        <p>贝赛尔曲线API参照
          <a href="http://greensock.com/docs/#/HTML5/GSAP/Plugins/BezierPlugin/" target="_blank">
            & gsap BezierPlugin
          </a>
        </p>
      </blockquote>
    </div>);
  }
}

export default Tween;
