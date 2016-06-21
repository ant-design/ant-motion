import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import animType from '../../common/animType';
import './page.less';

class Page1 extends React.Component {
  render() {
    const { text } = this.props.dataSource;
    const { title, content } = text;
    const { type } = this.props.variables;
    const animData = {
      ...this.props.variables,
      leaveReverse: true,
      type: animType[type].one.type,
    };
    return (
      <OverPack scrollName="page1"
        className={`content ${this.props.className} root`} id={this.props.id}
      >
        <QueueAnim hideProps={{ child: null }} key="queue" {...animData}>
          {typeof text === 'object' ? [<h1 key="h1">{title}</h1>,
          <i className="line" key="i" />,
          <p className={`${this.props.className}-center-text`} key="p">
            {content}
          </p>] : null}
        </QueueAnim>
      </OverPack>
    );
  }
}

Page1.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Page1.defaultProps = {
  className: 'page1',
  dataSource: {
    text: {
      title: 'PAGE TITLE',
      content: 'Demo source from the network, please upload pictures to replace. ' +
      'Demo source from the network, please upload pictures to replace. ' +
      'Demo source from the network, please upload pictures to replace.',
    },
  },
  variables: {
    type: 'bottomPosition',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 100,
  },
};

export default Page1;
