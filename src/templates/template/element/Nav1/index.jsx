import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import './index.less';
import Icon from 'antd/lib/icon';
const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const { logo, menu1, menu2, menu3, menu4 } = this.props.dataSource.block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne className={`${this.props.className}-logo`}
        animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
      >
        <img height="33" src={logo} />
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-user`}
        animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
        style={{ lineHeight: `${this.props.style.height - 2}px`, height: this.props.style.height }}
      >
        <a href="" className="help">
          <Icon type="question-circle-o" />
          <span>帮助</span>
        </a>
        <a href="" className="user">
          <span className="img">
            <img
              src="https://zos.alipayobjects.com/rmsportal/iXsgowFDTJtGpZM.png"
              width="30"
              height="30"
            />
          </span>
          <span>用户名</span>
        </a>
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`}
        animation={{ x: 30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={["a"]}
          style={{ lineHeight: `${parseFloat(this.props.style.height) - 2}px` }}
        >
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
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  dataSource: PropTypes.object,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
