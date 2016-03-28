import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Button from 'antd/lib/button';

class Page2 extends React.Component {
  render() {
    return (
      <OverPack scrollName="page2" className={`content ${this.props.className}`}>
        <TweenOne animation={{ ...this.props.anim.imgAnimate, type: 'from'}}
          hideProps={{ reverse: true }}
          key="img"
          className="img"
        >
          <img src={this.props.img} width="352" />
        </TweenOne>
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
      </OverPack>
    );
  }
}
Page2.propTypes = {
  className: PropTypes.string,
  anim: PropTypes.object,
};

Page2.defaultProps = {
  className: 'page2',
  img: 'https://os.alipayobjects.com/rmsportal/uxvINJWDtuEWPeg.png',
  anim: {
    type: 'scale',
    leaveReverse: true,
    ease: 'easeInOutQuart',
    duration: 450,
    imgAnimate: { scale: 0, opacity: 0 }
  }
};
export default Page2;
