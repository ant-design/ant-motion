import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import animType from '../../common/animType';
import './page.less';

class Page8 extends React.Component {
  render() {
    const { text, img, height } = this.props.dataSource;
    const { title, content } = text;
    const { type } = this.props.variables;
    const animData = {
      ...this.props.variables,
      leaveReverse: true,
      type: animType[type].one.type,
    };
    const _height = height.replace(/[0-9|.]/g, '') ? height : `${height}px`;
    return (
      <OverPack scrollName="page8"
        className={`content ${this.props.className} root`} id={this.props.id}
        style={{ height: _height }}
      >
        <QueueAnim hideProps={{ child: null }} key="queue" {...animData}>
          {typeof text === 'object' ? [<h1 key="h1">{title}</h1>,
          <i className="line" key="i" />,
          <p className={`${this.props.className}-center-text`} key="p">
            {content}
          </p>] : null}
          {img ? <img src={img} key="img" /> : null}
        </QueueAnim>
      </OverPack>
    );
  }
}

Page8.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Page8.defaultProps = {
  className: 'page8',
  dataSource: {
    height: '520px',
    text: {
      title: 'PAGE TITLE',
      content: 'Demo source from the network, please upload pictures to replace. ' +
      'Demo source from the network, please upload pictures to replace. ' +
      'Demo source from the network, please upload pictures to replace.',
    },
    img: 'https://os.alipayobjects.com/rmsportal/wpeWNczzJziTcVH.jpg',
  },
  variables: {
    type: 'bottomPosition',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 100,
  },
};

export default Page8;
