import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import './index.less';

class Footer extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = () => {
    return Object.keys(this.props.dataSource).filter(key => key.match('block'))
      .map((key, i) => {
        const data = this.props.dataSource[key];
        const links = data.contentLink.split(/\n/).filter(item => item);
        const content = data.content.split(/\n/).filter(item => item)
          .map((item, ii) => {
            const _item = item.trim();
            const isImg = _item.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
            return (<li className={isImg ? 'icon' : ''} key={ii}>
              <a href={links[ii]} target="_blank">
                {isImg ? <img src={_item} width="100%" /> : _item}
              </a>
            </li>);
          });
        return (<li className={data.className} key={i}>
          <h2>{data.title}</h2>
          <QueueAnim component="ul" type="bottom">
            {content}
          </QueueAnim>
        </li>)
      });
  };

  render() {
    const { content } = this.props.dataSource.copyright;
    const props = { ...this.props };
    const logoContent = this.props.dataSource.logo;
    const liChildrenToRender = this.getLiChildren();
    delete props.dataSource;
    delete props.name;
    return (<OverPack
      scrollName={this.props.name}
      {...props}
      playScale={0.2}
      hideProps={{ copyright: { reverse: true } }}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse>
        <li key="logo" >
          <p className="logo"><img src={logoContent.logo} width="100%"/></p>
          <p>{logoContent.content}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
      >
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
