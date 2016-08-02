import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import Icon from 'antd/lib/icon';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';
import 'rc-banner-anim/assets/index.css';

class Banner extends React.Component {
  render() {
    const children = Object.keys(this.props.dataSource).map((key, i) => {
      const item = this.props.dataSource[key];
      return (<Element
        bg={item.bgImg}
        key={i}
        prefixCls="banner-user-elem"
      >
        <QueueAnim type={['bottom','top']} delay={200} className={`${this.props.className}-title`}
          key="text"
        >
          <span className="logo" key="logo"><img width="100%" src={item.logo} /></span>
          <p key="content">{item.content}</p>
          <Button type="ghost" key="button">{item.button}</Button>
        </QueueAnim>
      </Element>)
    });
    const props = { ...this.props };
    delete props.name;
    delete props.dataSource;
    return (
      <OverPack
        scrollName={this.props.name}
        {...props}
        hideProps={{ icon: { reverse: true }, banner: { reverse: true }} }
      >
        <TweenOne
          key="banner"
          animation={{ opacity: 0, type: 'from' }}
          component={BannerAnim}
        >
          {children}
        </TweenOne>
        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  dataSource: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner1',
  style: {
    height: '100%',
  },
  dataSource: {
    block1: {
      logo: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
      content: '一个高效的页面动画解决方案',
      button: 'Learn More',
      bgImg: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
    },
    block2: {
      logo: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
      content: '一个高效的页面动画解决方案',
      button: 'Learn More',
      bgImg: 'https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg',
    },
    block3: {
      logo: 'https://zos.alipayobjects.com/rmsportal/glzXQktozLMgGtE.png',
      content: '一个高效的页面动画解决方案',
      button: 'Learn More',
      bgImg: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
    },
  },
};

export default Banner;
