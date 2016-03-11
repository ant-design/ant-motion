import React from 'react';
import Highlight from '../../componentElement/Highlight';
import DemoLayout, { Item } from '../../componentElement/component/DemoLayout';

const demoArr = [
  { comp: require('./demo/overPack') },
  { comp: require('./demo/parallax') },
  { comp: require('./demo/parallax-custom'), col: 12 },
  { comp: require('./demo/parallax-timeline'), col: 12 },
];

class ScrollAnimIndex extends React.Component {

  getStyle() {
    return `
    .code-box-demo .queue-anim-leaving{
      position: relative !important;
    }
    .queue-anim-demo{
      float: left;
      margin: 0 5px 0 0;
    }
    `;
  }

  render() {
    const demoCodeChild = demoArr.map((_item, i) => {
      const item = _item.comp;
      return (
        <Item col={_item.col} title={item.title} content={item.content}
          code={item.mdString} key={i}
        >
          <item.Comp />
        </Item>
      );
    });
    return (
      <div >
        <style dangerouslySetInnerHTML={{ __html: this.getStyle() }}></style>
        <h1>ScrollAnim 页面滚动动画</h1>
        <iframe key="github-btn"
          src="https://ghbtns.com/github-btn.html?user=react-component&repo=scroll-anim&type=star&count=true"
          frameBorder="0" scrolling="0" width="98px" height="20px"
        />
        <p>通过简单的配置，对页面里的元素添加随滚动条滚动的动画。</p>
        <h2>何时使用</h2>
        <ul className="list">
          <li>在页面里，滚动到每个小区块时需要播放动画时，增加页面的灵动。</li>
          <li>随滚动条增加视差感时。</li>
        </ul>
        <h2>怎么使用</h2>
        <h3>安装</h3>
        <div>
          <Highlight className="bash">
            {"$ npm install rc-scroll-anim --save"}
          </Highlight>
        </div>
        <blockquote>
          <p>本组件提供：</p>
          <p>1. OverPack 滚动到点直接播放动画</p>
          <p>2. Parallax 随滚动播放动画</p>
          <p>3. Link 锚点定位</p>
          <p>4. Element 不需要动画，但需要锚点定位到此，请用这个</p>
          <p>4. scrollScreen 启动整屏滚动，提供init()与unMount()方法</p>
        </blockquote>
        <h3>使用</h3>
        <div>
          <h4>OverPack</h4>
          <Highlight>
            {`import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;
ReactDOM.render(<ScrollOverPack>
  <QueueAnim key='queueAnim' hideProps={{ child: null }}>
    <div key='a'>依次进入</div>
    <div key='b'>依次进入</div>
    <div key='b'>依次进入</div>
  </QueueAnim>
  <TweenOne key='tweenOne' vars={{ x:100 }} hideProps={{ reverse: true }}>单元素动画</TweenOne>
  <Animate key='rc-animate' transitionName="fade"
    transitionAppear hideProps={{ child: null }}>
    rc-animate示例
  </Animate>
</ScrollOverPack>, mountNode);`}
          </Highlight>
          <h4>Parallax</h4>
          <Highlight>
            {`import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
React.render(<ScrollParallax vars={{x:100}}>Parallax示例</ScrollPallax>, mountNode);
`}
          </Highlight>
          <h4>Link Element</h4>
          <Highlight>
            {`import { Link, Element } from 'rc-scroll-anim';
React.render(<div>
  <div className="nav">
    <Link className="nav-list" location="page0">nav0</Link>
    <Link className="nav-list" location="page1">nav1</Link>
  </div>
  <Element className="pack-page" scrollName="page0">示例</Element>
  <Element className="pack-page" scrollName="page1">示例</Element>
</div>, mountNode);`
              }
          </Highlight>
          <h4>scrollScrenn</h4>
          <blockquote><p>主要功能: 是否一屏滚动</p></blockquote>
          <Highlight>
            {`import { scrollScreen } from 'rc-scroll-anim';
scrollScreen.init();
scrollScreen.unMount();`}
          </Highlight>
        </div>
        <h3>示例</h3>
        <DemoLayout col="24">
          {demoCodeChild}
        </DemoLayout>
        <blockquote>
          <p>Link 例子等更多例子
            <a
              href="http://react-component.github.io/scroll-anim/"
              target="_blank"
            >
              查看更多 demo
            </a>
          </p>
        </blockquote>
        <h2>API 说明</h2>
        <h3>OverPack API 说明</h3>
        <table className="api-table">
          <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>component</td>
            <td>string</td>
            <td><code>div</code></td>
            <td>组件标签</td>
          </tr>
          <tr>
            <td>playScale</td>
            <td>number</td>
            <td><code>0.5</code></td>
            <td>开始播放的屏幕百分比, 0.5 为屏幕中间</td>
          </tr>
          <tr>
            <td>always</td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>到否重复播放，如为 false 将只进入一遍，不再触发出场效果</td>
          </tr>
          <tr>
            <td>scrollName</td>
            <td>string</td>
            <td><code>null</code></td>
            <td>需要定位的名称，parallax的 location 或 link 的 location, 都需要以此元素做定位</td>
          </tr>
          <tr>
            <td>replay</td>
            <td>boolean</td>
            <td><code>false</code></td>
            <td>每次显示当前时是否都要动画, <code>false</code> 为只下往上滚时才有动画;</td>
          </tr>
          </tbody>
        </table>
        <h3>Parallax API 说明</h3>
        <table className="api-table">
          <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>animation</td>
            <td>object / array</td>
            <td><code>null</code></td>
            <td>组件动效数据</td>
          </tr>
          <tr>
            <td>location</td>
            <td>string</td>
            <td><code>null</code></td>
            <td>定位,<code>Element</code>的 name 值，必需是唯一的</td>
          </tr>
          <tr>
            <td>always</td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>同上</td>
          </tr>
          <tr>
            <td>scrollName</td>
            <td>string</td>
            <td><code>null</code></td>
            <td>需要定位的名称，parallax的 location 或 link 的 location, 都需要以此元素做定位</td>
          </tr>
          <tr>
            <td>component</td>
            <td>string</td>
            <td><code>div</code></td>
            <td>同上</td>
          </tr>
          </tbody>
        </table>
        <h4>animation 为 object 时</h4>
        <table className="api-table">
          <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>playScale</td>
            <td>array</td>
            <td><code>[0, 1]</code></td>
            <td>
              播放的区域段，第一个数为开始时的窗口百分比，第二个为结束时的窗口百分比，当第一个数为0时，
              将从窗口底部开始播放，且第二个为1时将在窗口顶部结束动画;<br /> 时间轴 timeline 时, 第一个将默认加上前面的播放时间,
              如
              <code>[&#123; playScale: [0, 0.2] &#125;, &#123; playScale: [0, 0.8] &#125;]]</code>,
              后面的0.8值相当于1, 在屏幕顶部结束;
            </td>
          </tr>
          <tr>
            <td>ease</td>
            <td>string</td>
            <td><code>easeInOutQuad</code></td>
            <td>动画的缓动</td>
          </tr>
          <tr>
            <td>onUpdate</td>
            <td>function</td>
            <td>-</td>
            <td>更新时回调，传回带ease的百分比 </td>
          </tr>
          <tr>
            <td>onStart</td>
            <td>function</td>
            <td>-</td>
            <td>开始 (playScale[0]) 时回调</td>
          </tr>
          <tr>
            <td>onComplete</td>
            <td>function</td>
            <td>-</td>
            <td>到达 (playScale[1]) 时回调</td>
          </tr>
          </tbody>
        </table>
        <h3>Link API 说明</h3>
        <table className="api-table">
          <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>location</td>
            <td>string</td>
            <td><code>null</code></td>
            <td>必需; 指定元素到达顶部; <code>Element</code> 的 scrollName 值, 元素必需是唯一的</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>number</td>
            <td><code>450</code></td>
            <td>点击滚动动画的时间</td>
          </tr>
          <tr>
            <td>ease</td>
            <td>string</td>
            <td><code>easeInOutQuad</code></td>
            <td>动画缓动</td>
          </tr>
          <tr>
            <td>active</td>
            <td>string</td>
            <td><code>active</code></td>
            <td>选中时的样式</td>
          </tr>
          <tr>
            <td>showHeightActive</td>
            <td>string / number / array</td>
            <td><code>0</code></td>
            <td>如设定了值，在进入时距顶部还有指定值的时,
              <code>link</code> 标签被附于 <code>active</code> 值; 在出场时是还有指定值时,
              <code>link</code> 标签移除 <code>active</code> 值; 如果为Array时，第一个为进场，第二个为出场;</td>
          </tr>
          <tr>
            <td>toShowHeight</td>
            <td>boolean</td>
            <td>false</td>
            <td>点击时是否滚到 <code>showHeightActive</code> 上</td>
          </tr>
          <tr>
            <td>onFocus</td>
            <td>func</td>
            <td>null</td>
            <td>选中时回调，返回参数 &#123; target, to &#125;</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>func</td>
            <td>null</td>
            <td>失去焦点时回调，返回参数同上 ｜</td>
          </tr>
          <tr>
            <td>component</td>
            <td>string</td>
            <td><code>div</code></td>
            <td>同上</td>
          </tr>
          </tbody>
        </table>
        <h3>Element API 说明</h3>
        <blockquote>
          <p>注: 如果元素不是以上组件时，需要定位到此元素上时，请用 <code>Element</code></p>
        </blockquote>
        <table className="api-table">
          <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>scrollName</td>
            <td>string</td>
            <td>null</td>
            <td>需要定位的名称，parallax的 location 或 link 的 location, 都需要以此元素做定位</td>
          </tr>
          <tr>
            <td>component</td>
            <td>string</td>
            <td><code>div</code></td>
            <td>同上</td>
          </tr>
          </tbody>
        </table>
        <h3>scrollScreen API 说明</h3>
        <h4>.init(vars)</h4>
        <p>启动一屏滚动效果</p>
        <h4>vars 为 object 时</h4>
        <table className="api-table">
          <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>duration</td>
            <td>number</td>
            <td>450</td>
            <td>滚动一段的时间</td>
          </tr>
          <tr>
            <td>ease</td>
            <td>string</td>
            <td><code>easeInOutQuad</code></td>
            <td>动画缓动</td>
          </tr>
          <tr>
            <td>docHeight</td>
            <td>number</td>
            <td>null</td>
            <td>如果设置了 body 或 html 的 height: 100% 时, 页面高度无法获取, 需要自已定义; 为 null 时用的是html的高度</td>
          </tr>
          <tr>
            <td>loop</td>
            <td>boolean</td>
            <td>false</td>
            <td>前后相接循环</td>
          </tr>
          <tr>
            <td>scrollInterval</td>
            <td>number</td>
            <td>1000</td>
            <td>滚动事件间隔时间</td>
          </tr>
          </tbody>
        </table>
        <h4>.unMount()</h4>
        <p>清除一屏滚动效果</p>
      </div>
    );
  }
}

export default ScrollAnimIndex;
