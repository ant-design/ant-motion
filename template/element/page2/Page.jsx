import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Button from 'antd/lib/button';
import animType from '../../common/animType';
import './page.less';
class Page2 extends React.Component {
  render() {
    const { img, text } = this.props.dataSource;
    const { title, content, button } = text;
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
    const textToRender = (typeof text === 'object' ? [<h2 key="h2">{title}</h2>,
      <p key="p" dangerouslySetInnerHTML={{ __html: content }}></p>,
      <Button key="button" type="ghost">{button}</Button>] : null);
    return (
      <OverPack scrollName="page2"
        className={`content ${this.props.className} root`}
        id={this.props.id}
      >
        <TweenOne
          {...animData[0]}
          hideProps={{ reverse: true }}
          key="img"
          className="img"
        >
          <img src={img} width="352" />
        </TweenOne>
        <QueueAnim
          {...animData[1]}
          hideProps={{ child: null }}
          key="text" className="text"
        >
          {textToRender}
        </QueueAnim>
      </OverPack>
    );
  }
}
Page2.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Page2.defaultProps = {
  className: 'page2',
  dataSource: {
    img: 'https://os.alipayobjects.com/rmsportal/BGwZWphjWXyDFlW.png',
    text: {
      title: 'Ant Motion Demo',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      'Image source from the network Demo, please upload pictures to replace.',
      button: 'Learn More',
    },
  },
  variables: {
    type: 'leftRightPoly',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};
export default Page2;
