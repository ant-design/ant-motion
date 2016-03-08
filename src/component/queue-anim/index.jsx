import React from 'react';
import Highlight from '../Highlight';
import DemoLayout, { Item } from '../DemoLayout';

import Basic from './demo/basic';
import Enter from './demo/enter-leave';
import Custom from './demo/custom';
import Change from './demo/change';
import Page from './demo/page';

class QueueAnimDemo extends React.Component {
  getStyle() {
    return `
.code-box-demo .demo-header {
  width: 100%;
  background: #ebedee;
  height: 30px;
}
.code-box-demo .demo-header ul {
  float: right;
  margin-right: 5px;
}
.code-box-demo .demo-header ul li {
  width: 50px;
  height: 30px;
  float: left;
  background: #e4e4e4;
  margin-left: 5px;
}
.code-box-demo .demo-header ul li:before {
  margin: 10px auto;
  width: 20px;
  height: 10px;
  background: #ebeded;
}
.code-box-demo .demo-header .logo {
  float: left;
  margin: 0px auto 0 10px;
  line-height: 32px;
}
.code-box-demo .demo-header .logo img{
  margin:auto
}
.code-box-demo .demo-header .logo span {
  display: block;
  float: right;
}
.code-box-demo .demo-content {
  width: 100%;
  margin: 10px auto;
}
.code-box-demo .demo-content .demo-title {
  text-align:left;
  background: #a4a4a4;
  width: 40%;
  height: 20px;
  line-height: 20px;
  color: #ebeded;
  text-indent:10px
}
.code-box-demo .demo-content .demo-listBox {
  margin-top: 10px;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title {
  height: 30px;
  background: #cacaca;
  overflow: hidden;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title:before,
.code-box-demo .demo-content .demo-listBox .demo-list .title:after{
  width: 30%;
  height: 5px;
  background: #ebeded;
  float:left;
  margin:12px 35px 0;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title:after{
  width:15%;
  float:right;
  margin:12px 10px 0;

}
.code-box-demo .demo-content .demo-listBox .demo-list ul li {
  height: 25px;
  background: #ebeded;
  border-bottom: 1px solid #cacaca;
  overflow: hidden;
  padding: 5px 15px;
}
.code-box-demo .demo-content .demo-listBox .demo-list ul li:before {
  width: 10px;
  height: 5px;
  background: #cacaca;
  float: left;
  margin-top:4px
}
.code-box-demo .demo-content .demo-listBox .demo-list ul li:after {
  width: 50%;
  height: 5px;
  background: #cacaca;
  float: left;
  margin-left: 10px;
  margin-top: 4px;
}
.code-box-demo .demo-content .demo-kp {
  margin: 10px auto;
}
.code-box-demo .demo-content .demo-kp ul li {
  display: inline-block;
  width: 32%;
  height: 40px;
  background: #cacaca;
  color: #ebeded;
  text-align: left;
  padding: 10px;
  margin-right: calc(2%);
}
.code-box-demo .demo-content .demo-kp ul li:last-child {
  margin-right: 0%;
}
.code-box-demo .demo-content .demo-kp ul li:after {
  width: 60%;
  height: 5px;
  background: #ebeded;
  float: left;
  margin-top: 7px;
}
.code-box-demo .demo-content .demo-kp ul li:before {
  background: #ebeded;
  float: left;
  width: 15px;
  height: 15px;
  margin:2px 10% 0 0;

}
.code-box-demo .demo-footer {
  margin-top: 10px;
  background: #cacaca;
  height: 40px;
  float: left;
  width: 100%;
  display: table;
}
.code-box-demo .demo-footer:before {
  width: 60%;
  height: 5px;
  background: #ededed;
  margin: 10px auto 0;
}
.code-box-demo .demo-footer:after {
  width: 30%;
  height: 5px;
  background: #ededed;
  margin: 5px auto;
}
.code-box-demo .demo-header ul li:before,
.code-box-demo .demo-content .demo-kp ul li:before,
.code-box-demo .demo-content .demo-kp ul li:after,
.code-box-demo .demo-content .demo-listBox .demo-list .title:before,
.code-box-demo .demo-content .demo-listBox .demo-list .title:after,
.code-box-demo .demo-content .demo-listBox .demo-list ul li:before,
.code-box-demo .demo-content .demo-listBox .demo-list ul li:after,
.code-box-demo .demo-footer:before,
.code-box-demo .demo-footer:after {
  display: block;
  content: "";
}
`;
  }

  render() {
    return (<div>
      <style dangerouslySetInnerHTML={{ __html: this.getStyle() }}></style>
      <h1>QueueAnim 进出场动画</h1>
      <iframe key="github-btn"
        src="https://ghbtns.com/github-btn.html?user=react-component&repo=queue-anim&type=star&count=true"
        frameBorder="0" scrolling="0" width="98px" height="20px"
      />
      <p>通过简单的配置对一组元素添加串行的进场动画效果。</p>
      <h2>何时使用</h2>
      <ul className="list">
        <li>从内容A到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。</li>
        <li>小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来凸显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感。</li>
        <li>特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。</li>
      </ul>
      <h2>怎么使用</h2>
      <h3>安装</h3>
      <div>
        <Highlight className="bash">
          {"$ npm install rc-queue-anim --save"}
        </Highlight>
      </div>
      <h3>使用</h3>
      <div>
        <Highlight>
          {`import QueueAnim from 'rc-queue-anim';
ReactDOM.render(<QueueAnim>
  <div key="demo1">依次进场</div>
  <div key="demo2">依次进场</div>
  <div key="demo3">依次进场</div>
  <div key="demo4">依次进场</div>
</QueueAnim>, mountNode);`}
        </Highlight>
      </div>
      <blockquote>
        <p>每个子标签必须带 key，如果未设置 key 将不执行动画。</p>
      </blockquote>
      <h2>示例</h2>
      <DemoLayout col="12">
        <Item title={Basic.title} content={Basic.content} code={Basic.mdString}>
          <Basic.Comp />
        </Item>
        <Item title={Enter.title} content={Enter.content} code={Enter.mdString}>
          <Enter.Comp />
        </Item>
        <Item title={Custom.title} content={Custom.content} code={Custom.mdString}>
          <Custom.Comp />
        </Item>
        <Item title={Change.title} content={Change.content} code={Change.mdString}>
          <Change.Comp />
        </Item>
        <Item title={Page.title} content={Page.content} code={Page.mdString}>
          <Page.Comp />
        </Item>
      </DemoLayout>
      <blockquote>
        <p>router 例子
          <a
            href="https://github.com/ant-motion/ant-motion/blob/master/src/entry/index.jsx#L66"
            target="_blank"
          >
            查看本站代码
          </a>，或
          <a href="http://react-component.github.io/queue-anim/" target="_blank">
            查看更多
          </a>
          queueAnim 例子；
        </p>
      </blockquote>
      <h2>API 说明</h2>
      <table className="api-table">
        <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>默认</th>
          <th>详细</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>type</td>
          <td>string / array</td>
          <td><code>right</code></td>
          <td>动画内置参数 <br /> <code>left</code>&nbsp;
            <code>right</code>&nbsp;
            <code>top</code>&nbsp;
            <code>bottom</code>&nbsp;
            <code>scale</code>&nbsp;
            <code>scaleBig</code>&nbsp;
            <code>scaleX</code>&nbsp;
            <code>scaleY</code>
          </td>
        </tr>
        <tr>
          <td>animConfig</td>
          <td>object / array</td>
          <td>null</td>
          <td>
            配置动画参数
            <br /> 如 <code>&#123; opacity:[1, 0],translateY:[0, -30] &#125;</code>
            具体参考 <a href="http://julian.com/research/velocity">velocity</a> 的写法
          </td>
        </tr>
        <tr>
          <td>delay</td>
          <td>number / array</td>
          <td>0</td>
          <td>整个动画的延时,以毫秒为单位</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>number / array</td>
          <td>500</td>
          <td>每个动画的时间,以毫秒为单位</td>
        </tr>
        <tr>
          <td>interval</td>
          <td>number / array</td>
          <td>100</td>
          <td>每个动画的间隔时间,以毫秒为单位</td>
        </tr>
        <tr>
          <td>leaveReverse</td>
          <td>boolean</td>
          <td>false</td>
          <td>出场时是否倒放,从最后一个 dom 开始往上播放</td>
        </tr>
        <tr>
          <td>ease</td>
          <td>string / array</td>
          <td><code>easeOutQuart</code></td>
          <td>动画的缓动函数,<a href="http://julian.com/research/velocity/#easing">查看详细</a></td>
        </tr>
        <tr>
          <td>animatingClassName</td>
          <td>array</td>
          <td><code>['queue-anim-entering', 'queue-anim-leaving']</code></td>
          <td>进出场动画进行中的类名</td>
        </tr>
        <tr>
          <td>component</td>
          <td>string</td>
          <td><code>div</code></td>
          <td>QueueAnim 替换的标签名</td>
        </tr>
        </tbody>
      </table>
    </div>);
  }
}

export default QueueAnimDemo;
