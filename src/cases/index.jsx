import React from 'react';
import ReactDOM from 'react-dom';
import AutoResponsive from 'autoresponsive-react';
import { load } from '../common/util';

const imgData = [
  { src: 'https://t.alipayobjects.com/images/T1nbhmXfphXXXXXXXX.jpg', width: 211, height: 535, href: '#' },
  { src: 'https://t.alipayobjects.com/images/T18HlmXllgXXXXXXXX.jpg', width: 211, height: 490, href: '#' },
  { src: 'https://t.alipayobjects.com/images/T1PrdmXjVhXXXXXXXX.jpg', width: 211, height: 490, href: '#' },
];

class Cases extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      containerWidth: null,
    };
    this.getImageData();
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth,
      });
    });
  }

  getImageData() {
    load({
      data: imgData,
      onComplete: () => {
        this.setState({
          data: imgData,
        });
      },
    });
  }


  getAutoResProps() {
    return {
      itemMargin: 40,
      containerWidth: this.state.containerWidth || document.body.clientWidth * 0.92 - 300,
      itemClassName: 'item',
      transitionDuration: '.3',
    };
  }

  getImgChild(item, i) {
    return (<a className="item"
      style={{ width: item.width + 44, height: item.height + 44 }}
      key={i}
      href={item.href}
      target="_blank"
    >
      <img src={item.src} width={item.width} height={item.height} />
    </a>);
  }

  render() {
    let loadChild = (<div className="load">
      加载中...
    </div>);

    if (this.state.data) {
      loadChild = (<AutoResponsive ref="container" {...this.getAutoResProps()}>
        {this.state.data.map(this.getImgChild)}
      </AutoResponsive>);
    }
    return (<div>
      <h1>首页动效组合案例</h1>
      <p className="text">首页（Display Page）一般是指当用户进入某个网站时浏览到的第一个页面，也可以当作着陆页（Landing
        Page）来吸引用户的注意。在此，我们归纳整理了几种最常见的展示类模板，可以用于灵活的搭配组合。</p>
      {loadChild}
    </div>);
  }
}

export default Cases;
