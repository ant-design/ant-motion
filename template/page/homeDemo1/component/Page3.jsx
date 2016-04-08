import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Button from 'antd/lib/button';

class Page3 extends React.Component {
  render() {
    return (
      <OverPack scrollName="page3" className={`content ${this.props.className}`}>
        <QueueAnim {...this.props.anim} hideProps={{ child: null }} key="text" className="text">
          <h2 key="h2">Ant Motion Demo</h2>
          <p key="p">Image source from the network Demo, please upload pictures to replace.
            Image source from the network Demo,please upload pictures to replace.
            Image source from the network Demo, please upload pictures to replace.
            Image source from the network Demo, please upload pictures to replace.<br />
            Image source from the network Demo,please upload pictures to replace.
            Image source from the network Demo, please upload pictures to replace.
          </p>
          <Button key="button" type="ghost">Learn More</Button>
        </QueueAnim>
        <TweenOne animation={{ ...this.props.anim.imgAnimate, type: 'from' }}
          hideProps={{ reverse: true }}
          key="img"
          className="img"
        >
          <img src={this.props.img} width="352" />
        </TweenOne>
      </OverPack>
    );
  }
}

Page3.propTypes = {
  className: PropTypes.string,
  anim: PropTypes.object,
  img: PropTypes.string,
};

Page3.defaultProps = {
  className: 'page3',
  img: 'https://os.alipayobjects.com/rmsportal/JugUOImfNERsOAb.png',
  anim: {
    type: 'left',
    leaveReverse: true,
    ease: 'easeInOutQuart',
    duration: 450,
    imgAnimate: { x: 30, opacity: 0 },
  },
};

export default Page3;
