import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import animType from '../../common/animType';
import './header.less';
const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const { img, menu1, menu2, menu3, menu4 } = this.props.dataSource;
    const { type, delay, interval, duration, ease } = this.props.variables;
    const animData = ['one', 'tow'].map((order, i) => {
      const anim = animType[type][order] || animType[type].one;
      anim.animation.delay = i * (interval || 100) + delay;
      anim.animation.ease = ease;
      anim.animation.duration = duration;
      anim.delay = delay;
      anim.ease = ease;
      anim.duration = duration;
      // 间隔只给区块队列动画使用.. queueAnim 用;
      anim.interval = interval;
      anim.animation.type = 'from';
      return anim;
    });
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      className={`${this.props.className} root`}
      id={this.props.id}
    >
      <TweenOne className={`${this.props.className}-logo`} {...animData[0]}>
        <img height="33" src={img} />
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`} {...animData[1]}>
        <Menu onClick={this.handleClick} mode="horizontal">
          <Item key="a">{menu1}</Item>
          <Item key="b">{menu2}</Item>
          <Item key="c">{menu3}</Item>
          <Item key="d">{menu4} </Item>
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Header.defaultProps = {
  className: 'header',
  dataSource: {
    img: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    menu1: '导航一',
    menu2: '导航二',
    menu3: '导航三',
    menu4: '导航四',
  },
  variables: {
    type: 'leftRightPoly',
    ease: 'easeOutQuart',
    duration: 800,
    interval: 100,
    delay: 100,
  },
};

export default Header;
