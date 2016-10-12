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
    const navToRender = navArr.map((item) => {
      let className = this.props.activeKey === item.key ? 'active' : '';
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
          animation={{opacity: 0, type: 'from' }}
        >
          <Link to="/" key="logo">
            <img height="24" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
            <img height="14" src="https://zos.alipayobjects.com/rmsportal/bNfCyCcgnyTgRmz.svg" />
          </Link>
        </TweenOne>
        <TweenOne component="nav"
          className={`${this.props.className}-nav`}
          animation={{opacity: 0, type: 'from' }}
        >
          <ul>
            {navToRender}
          </ul>
          <span>
          <iframe
            src={`https://ghbtns.com/github-btn.html?user=ant-design&repo=ant-motion&type=star&count=true`}
            frameBorder="0" scrolling="0" width="98px" height="20px"
          />
          </span>
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
