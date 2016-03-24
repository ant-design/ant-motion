import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';

class Header extends React.Component {
  render() {
    const img = this.props.img;
    const animData = ['left', 'right'].map((style, i) => {
      const anim = this.props.anim.anim[style];
      anim.delay = i * (this.props.anim.delay || 100) + this.props.anim.delay;
      anim.duration = this.props.duration;
      anim.type = 'from';
      return anim
    });
    return (<TweenOne component="header"
      animation={{ opacity: 0, type: 'from' }}
      className={this.props.className}
    >
      <TweenOne className={`${this.props.className}-logo`}
        animation={animData[0]}
      >
        <img height="33" src={img} />
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`}
        animation={animData[1]}
      >
        <Menu onClick={this.handleClick}
          mode="horizontal">
          <Menu.Item key="a">导航一</Menu.Item>
          <Menu.Item key="b">导航二</Menu.Item>
          <Menu.Item key="c">导航三</Menu.Item>
          <Menu.Item key="d">导航四 </Menu.Item>
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  anim: PropTypes.object,
};

Header.defaultProps = {
  className: 'header',
  img: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  anim: {
    anim: {
      left: { x: -30, opacity: 0, },
      right: { x: 30, opacity: 0, },
    },
    duration: 800,
    delay: 100,
  },
};

export default Header;
