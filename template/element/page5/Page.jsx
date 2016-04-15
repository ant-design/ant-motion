import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import animType from '../../common/animType';
import './page.less';

class Page4 extends React.Component {
  render() {
    const { title, content } = this.props.dataSource.text;
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
      anim.leaveReverse = true;
      return anim;
    });
    const imgDataToRender = Object.keys(this.props.dataSource).filter(key => key !== 'text')
      .map((key, i) => {
        const itemData = this.props.dataSource[key];
        if (itemData === '$remove') {
          return null;
        }
        return (<li key={i}>
          <div>
            <img src={itemData.img} width="150" />
          </div>
          <h2>{itemData.title}</h2>
          <i />
          <p dangerouslySetInnerHTML={{ __html: itemData.content }} />
        </li>);
      });
    return (
      <div className={this.props.className}>
        <OverPack scrollName="page5" className={`${this.props.className}-wap root`}
          id={this.props.id}
        >
          <TweenOne component="h1" key="h1"
            hideProps={{ reverse: true }}
            animation={{ ...animData[0].animation }}
          >
            {title}
          </TweenOne>
          <TweenOne component="p" className={`${this.props.className}-center-text`} key="p"
            hideProps={{ reverse: true }}
            animation={{ ...animData[0].animation, delay: interval }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <QueueAnim {...animData[1]} delay={[0, animData[1].delay + 100]} component="ul"
            hideProps={{ child: null }} key="1"
          >
            {imgDataToRender.filter((item, i) => i < 3)}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

Page4.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Page4.defaultProps = {
  className: 'page5',
  dataSource: {
    text: {
      title: 'PAGE TITLE',
      content: 'Demo source from the network, please upload pictures to replace. ' +
      'Demo source from the network, please upload pictures to replace. ' +
      'Demo source from the network, please upload pictures to replace.',
    },
    img1: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
    img2: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
    img3: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
  },
  variables: {
    type: 'bottomPosition',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Page4;
