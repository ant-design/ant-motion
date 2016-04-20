import React, { PropTypes } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import animType from '../../common/animType';
import './footer.less';

class Footer extends React.Component {
  render() {
    const { text } = this.props.dataSource;
    const { type, delay, duration, ease } = this.props.variables;
    const animData = animType[type].one;
    animData.animation.delay = delay;
    animData.animation.ease = ease;
    animData.animation.duration = duration;
    animData.animation.type = 'from';
    return (
      <OverPack className={`${this.props.className} root`} playScale={0.05} id={this.props.id}>
        <TweenOne
          key="0" hideProps={{ reverse: true }}
          {...animData}
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
    text: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
  },
  variables: {
    type: 'bottomPosition',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Footer;
