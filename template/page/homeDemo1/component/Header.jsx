import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import animType from '../../../common/animType';

class Header extends React.Component {
  render() {
    console.log("this.props", this.props.variables);
    const { img } = this.props.dataSource;
    const { type, delay, duration } = this.props.variables;
    const animData = ['one', 'tow'].map((order, i) => {
      const anim = animType[type][order] || animType[type].one;
      anim.animation.delay = i * (delay || 100) + delay;
      anim.delay = i * (delay || 100) + delay;
      anim.animation.duration = duration;
      anim.duration = duration;
      anim.animation.type = 'from';
      return anim
    });
    return (<TweenOne component="header"
      animation={{ opacity: 0, type: 'from' }}
      className={`${this.props.className} root`}
      id={this.props.id}
    >
      <TweenOne className={`${this.props.className}-logo`}
        {...animData[0]}
      >
        <img height="33" src={img} />
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`}
        {...animData[1]}
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
  id: PropTypes.string,
  className: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Header.defaultProps = {
  id: 'header',
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
    duration: 800,
    delay: 100,
  },
};

// hidden start
Header.config = {
  name: 'ant motion header',
  dataSource: [
    {
      key: 'img',
      name: 'icon',
      value: 'https://os.alipayobjects.com/rmsportal/YysxJDMuhbSlKid.png',
    },
    {
      key: 'menu1',
      name: '导航一',
      value: '导航一',
    },
    {
      key: 'menu2',
      name: '导航二',
      value: '导航二',
    },
    {
      key: 'menu3',
      name: '导航三',
      value: '导航三',
    },
    {
      key: 'menu4',
      name: '导航四',
      value: '导航四',
    },
  ],
  variables: [
    {
      key: 'type',
      name: '样式',
      value: 'leftRightPoly',
    },
    {
      key: 'duration',
      name: '时长',
      value: 800,
    },
    {
      key: 'delay',
      name: '延迟时间',
      value: 100,
    },
  ],
};
// hidden end

export default Header;
