import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Footer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
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
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
