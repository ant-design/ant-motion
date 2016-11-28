import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import './index.less';

const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    delete props.dataSource;
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;

    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
      style={dataSource[name].style || {}}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
      >
        <img height="33" src={logo} />
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['a']}
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
  dataSource: PropTypes.object,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
