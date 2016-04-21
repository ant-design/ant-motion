import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import animType from '../../common/animType';
import './page.less';

class Page4 extends React.Component {
  render() {
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
    const imgDataToRender = Object.keys(this.props.dataSource)
      .filter(key => key.indexOf('block') >= 0)
      .map((key, i) => {
        const itemData = this.props.dataSource[key];
        if (itemData === '$remove') {
          return null;
        }
        return (<li key={i}>
          <div>
            <img src={itemData.img} width="115" />
          </div>
          <h2>{itemData.title}</h2>
          <i />
          <p dangerouslySetInnerHTML={{ __html: itemData.content }} />
        </li>);
      });
    const height = this.props.dataSource.height;
    const _height = height.replace(/[0-9|.]/g, '') ? height : `${height}px`;
    const bgImg = this.props.dataSource.bgImg;
    const style = bgImg && bgImg !== 'null' ? {
      background: `url(${bgImg}) fixed center / cover`,
      height: _height,
    } : null;
    return (
      <div className={this.props.className}
        style={style}
      >
        <OverPack scrollName="page4" className={`${this.props.className}-wap root`}
          id={this.props.id}
        >
          <QueueAnim {...animData[1]} component="ul"
            hideProps={{ child: null }} key="1"
          >
            {imgDataToRender}
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
  className: 'page6',
  dataSource: {
    height: '320px',
    bgImg: 'https://os.alipayobjects.com/rmsportal/cvoQWlUZsvZlWsB.jpg',
    block1: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
    block2: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
    block3: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
    block4: {
      img: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
      title: 'SLIDERS',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      ' Image source from the network Demo',
    },
  },
  variables: {
    type: 'bottomPosition',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Page4;
