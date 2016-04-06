import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Page1 extends React.Component {
  render() {
    return (
      <OverPack scrollName="page1" className={`content ${this.props.className} root`} id={this.props.id}>
        <QueueAnim hideProps={{ child: null }} key="queue" {...this.props.anim}>
          <h1 key="h1">PAGE TITLE</h1>
          <i className='line' key="i" />
          <p className={`${this.props.className}-center-text`} key="p">
            Demo source from the network, please upload pictures to replace.
            Demo source from the network, please uploadpictures to replace.
            Demo source from the network, please upload pictures to replace.
          </p>
        </QueueAnim>
      </OverPack>
    );
  }
}

Page1.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  anim: PropTypes.object,
};

Page1.defaultProps = {
  className: 'page1',
  id: 'page1',
  anim: {
    type: 'bottom',
    leaveReverse: true,
    ease: 'easeInOutQuart',
    duration: 450,
  }
};

export default Page1;
