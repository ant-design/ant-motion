import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';

// const navArr = require('./list').nav;
const navArr = require('./nav');
class Header extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const navToRender = navArr.map((item, i) => {
      let className = this.props.activeKey === item.key ? 'active' : '';
      className = className === '' && !this.props.activeKey && i === 0 ? 'active' : className;
      const _item = (<li key={item.key}>
        <Link to={item.href} className={className}
          disabled={item.disabled}
        >
          {item.name}
        </Link>
      </li>);
      return _item;
    });
    return (<header
      className={`${this.props.className}-wrapper`}
    >
      <div className={this.props.className}>
        <TweenOne className={`${this.props.className}-logo`}
          animation={{ x: '0', opacity: 1, duration: 800 }}
          style={{ transform: 'translateX(-30px)', opacity: 0 }}
        >
          <Link to="/" key="logo">
            <img height="30" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
            <img height="16" src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" />
          </Link>
        </TweenOne>
        <TweenOne component="nav"
          className={`${this.props.className}-nav`}
          animation={{ x: '0', opacity: 1, duration: 800 }}
          style={{ transform: 'translateX(30px)', opacity: 0 }}
        >
          <ul>
            {navToRender}
          </ul>
        </TweenOne>
      </div>
    </header>);
  }
}
const objectOrArray = React.PropTypes.oneOfType([PropTypes.string, PropTypes.array]);
Header.propTypes = {
  className: PropTypes.string,
  activeKey: objectOrArray,
};

Header.defaultProps = {
  className: 'header',
};

export default Header;
