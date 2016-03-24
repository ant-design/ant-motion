import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Page4 extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <OverPack scrollName="page4" playScale={0.4} className={`${this.props.className}-wap`}>
          <QueueAnim {...this.props.anim.title} hideProps={{ child: null }} key="0">
            <h1 key="h1">PAGE TITLE</h1>
            <p className={`${this.props.className}-center-text`} key="p">
              Demo source from the network, please upload pictures to replace.
              Demo source from the network, please uploadpictures to replace.
              Demo source from the network, please upload pictures to replace.
            </p>
          </QueueAnim>
          <QueueAnim {...this.props.anim.img} component="ul"
            hideProps={{ child: null }} key="1"
          >
            <li key="0">
              <div>
                <img src={this.props.img[0]} width="115" />
              </div>
              <h2>SLIDERS</h2>
              <i />
              <p>Image source from the network Demo,
                please upload pictures to replace.
                Image source from the networkDemo
              </p>
            </li>
            <li key="1">
              <div>
                <img src={this.props.img[0]} width="115" />
              </div>
              <h2>SLIDERS</h2>
              <i />
              <p>Image source from the network Demo,
                please upload pictures to replace.
                Image source from the networkDemo
              </p>
            </li>
            <li key="2">
              <div>
                <img src={this.props.img[0]} width="115" />
              </div>
              <h2>SLIDERS</h2>
              <i />
              <p>Image source from the network Demo,
                please upload pictures to replace.
                Image source from the networkDemo
              </p>
            </li>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

Page4.propTypes = {
  className: PropTypes.string,
  anim: PropTypes.object,
};

Page4.defaultProps = {
  className: 'page4',
  img: [
    'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
    'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
    'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
  ],
  anim: {
    title: {
      type: 'bottom',
      leaveReverse: true,
      ease: 'easeInOutQuart',
      duration: 450,
    },
    img: {
      type: 'bottom',
      leaveReverse: true,
      ease: 'easeInOutQuart',
      duration: 450,
    }
  }
};

export default Page4;
