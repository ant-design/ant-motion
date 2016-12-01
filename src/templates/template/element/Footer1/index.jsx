import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import './index.less';

class Footer extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = dataSource =>
    Object.keys(dataSource).filter(key => key.match('block'))
      .sort((a, b) => {
        const aa = Number(a.replace(/[^0-9]/ig, ''));
        const bb = Number(b.replace(/[^0-9]/ig, ''));
        return aa - bb;
      })
      .map((key, i) => {
        const data = dataSource[key];
        const links = data.children.contentLink.children.split(/\n/).filter(item => item);
        const content = data.children.content.children.split(/\n/).filter(item => item)
          .map((item, ii) => {
            const cItem = item.trim();
            const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
            return (<li className={isImg ? 'icon' : ''} key={ii}>
              <a href={links[ii]} target="_blank">
                {isImg ? <img src={cItem} width="100%" /> : cItem}
              </a>
            </li>);
          });
        return (<li className={data.className} key={i} id={`${this.props.id}-${key.split('_')[1]}`}>
          <h2>{data.children.title.children}</h2>
          <QueueAnim component="ul" type="bottom">
            {content}
          </QueueAnim>
        </li>);
      });

  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    const logoContent = dataSource[`${name}_logo`].children;
    const liChildrenToRender = this.getLiChildren(dataSource);
    return (<OverPack
      {...props}
      playScale={0.2}
      hideProps={{ copyright: { reverse: true } }}
      style={dataSource[name].style}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse>
        <li key="logo" id={`${props.id}-logo`} style={dataSource[`${name}_logo`].style}>
          <p className="logo" style={logoContent.img.style} >
            <img src={logoContent.img.children} width="100%" />
          </p>
          <p style={logoContent.content.style}>{logoContent.content.children}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        style={dataSource[`${name}_content`].style}
        id={`${props.id}-content`}
      >
        <span
          dangerouslySetInnerHTML={{ __html: dataSource[`${name}_content`].children }}
        />
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
