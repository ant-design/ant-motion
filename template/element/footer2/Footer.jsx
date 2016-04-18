import React, { PropTypes } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import animType from '../../common/animType';
import './footer.less';

class Footer extends React.Component {
  render() {
    const { text } = this.props.dataSource;
    const liToRender = Object.keys(this.props.dataSource).filter(key => key !== 'text')
      .map((key, i) => {
        const item = this.props.dataSource[key];
        return (<li key={i}>
          <h2>{item.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.content }}
            className={`${this.props.className}-wrapper`}
          >
          </div>
        </li>);
      });
    const { type, delay, interval, duration, ease } = this.props.variables;
    const animData = ['one', 'tow'].map((order, i) => {
      const anim = animType[type][order] || animType[type].one;
      anim.animation.delay = i * (interval || 100) + delay;
      anim.animation.ease = ease;
      anim.animation.duration = duration;
      anim.delay = delay;
      anim.ease = ease;
      anim.duration = duration;
      // 间隔只给区块队列动画使用.. queueAnim 用;
      anim.interval = interval;
      anim.animation.type = 'from';
      return anim;
    });
    return (
      <OverPack className={`${this.props.className} root`} playScale={0.1} id={this.props.id}>
        <QueueAnim component="ul" {...animData[0]} key="queue"
          hideProps={{ child: null }}
        >
          {liToRender}
        </QueueAnim>
        <TweenOne
          animation={{ ...animData[1].animation, delay: animData[1].animation.delay + 100 }}
          className={`${this.props.className}-line`}
        />
        <TweenOne
          key="0" hideProps={{ reverse: true }}
          animation={{ ...animData[1].animation, delay: animData[1].animation.delay + 200 }}
          className={`${this.props.className}-copyright`}
        >
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </TweenOne>
      </OverPack>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Footer.defaultProps = {
  className: 'footer',
  dataSource: {
    block1: {
      title: 'ANT MOTION',
      content: 'A efficient motion design solutions',
    },
    block2: {
      title: 'ABOUT US',
      content: `<a href="#">Ant UED blog</a>
<a href="#">Ant Design</a>
<a href="#">Ant Motion</a>`,
    },
    block3: {
      title: 'GET IN TOUCH',
      content: `<p class="address">18 # Wan Tang Lu HangZou ZheJiang</p>
<p class="phone">0576-26888888</p>
<p class="mail">alipay@alipay.com</p>`,
    },
    text: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
  },
  variables: {
    type: 'bottomPosition',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Footer;
