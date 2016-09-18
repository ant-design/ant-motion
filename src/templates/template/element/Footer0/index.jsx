import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Footer extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const { content } = this.props.dataSource.copyright;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;
    return (<OverPack
      scrollName={this.props.name}
      {...props}
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
