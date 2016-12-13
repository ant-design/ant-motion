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
    const navData = dataSource[`${name}_menu`].children;
    const navChildren = Object.keys(dataSource[`${name}_menu`].children)
      .map((key, i) => (<Item key={i}>{navData[key]}</Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
      style={dataSource[name].style || {}}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
        style={dataSource[`${name}_logo`].style || {}}
      >
        <img width="100%" src={dataSource[`${name}_logo`].children} />
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['a']}
          style={dataSource[`${name}_menu`].style || {}}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
