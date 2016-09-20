import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';

const Element = BannerAnim.Element;
import './detail-swich.css';

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, ' +
  'Hong Kong and Southeast Asia known as motorcycles [2], ' +
  'is a driven by the engine, ' +
  'operated by a hand or two directions three-wheeled vehicles, is a means of transport. ' +
  'In some military or police applications, will add a side compartment and a secondary wheel, ' +
  'become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.',
  title: 'Motorcycle',
};

let dataArray = [
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429'
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F'
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487'
  }
];
dataArray = dataArray.map(item => {
  return { ...item, ...textData }
});

export default class DetailSwitchDemo extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor() {
    super(...arguments);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0,  -300], opacity: [0, 1] },
      ],
    };
    this.oneEnter = false
  }

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800
    }
    return 1000
  };

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt--;
    const imgAnim = [
      { translateX: [0,  -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [0, 1] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.refs.bannerImg.prev();
    this.refs.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0,  -300], opacity: [0, 1] },
    ];
    showInt++;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.refs.bannerImg.next();
    this.refs.bannerText.next();
  };

  render() {
    const imgChildren = dataArray.map((item, i) => {
      return (
        <Element key={i} style={{ background: item.color }} hideProps={true}>
          <QueueAnim
            animConfig={this.state.imgAnim}
            duration={this.getDuration}
            delay={[ !i ? this.state.delay : 300, 0]}
            ease={['easeOutCubic', 'easeInQuad']}
            key="img-wrapper"
          >
            <div className={`${this.props.className}-map map${i}`} key="map">
              <img src={item.map} width="100%" />
            </div>
            <div className={`${this.props.className}-pic pic${i}`} key="pic">
              <img src={item.pic} width="100%" />
            </div>
          </QueueAnim>
        </Element>
      );
    });
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      return (<Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[ !i ? this.state.delay + 500 : 800, 0 ]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <p key="p">{content}</p>
        </QueueAnim>
      </Element>)
    });
    return (<div
      className={`${this.props.className}-wrapper`}
      style={{ background: dataArray[this.state.showInt].background }}
    >
      <div className={this.props.className}>
        <BannerAnim
          prefixCls={`${this.props.className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          ref="bannerImg"
          onChange={this.onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${this.props.className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          ref="bannerText"
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
          {this.state.showInt< dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
        </TweenOneGroup>
      </div>
    </div>);
  }
}
