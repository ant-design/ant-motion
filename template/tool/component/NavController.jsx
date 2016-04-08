import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { Button, Icon } from 'antd';
import './Nav.less';

class NavController extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'iconClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  iconClick() {
    const show = !this.state.show;
    this.setState({
      show,
    });
  }

  render() {
    return (
      <div {...this.props}>
        <TweenOne animation={{ y: this.state.show ? 0 : 64 }} className={`${this.props.className}-bar`}>
          <ul>
            <li><a href="http://motion.ant.design">返回主站</a></li>
            <li><a disabled>查看教程</a></li>
            <li><a>重置参数</a></li>
            <li><Button type="primary">预览模式</Button></li>
            <li><Button type="primary">生成页面</Button></li>
          </ul>
        </TweenOne>
        <div className={`${this.props.className}-icon`}
          onClick={this.iconClick}
        >
          <Icon type="down" className={this.state.show ? '' : 'up'}/>
        </div>
      </div>
    );
  }
}
NavController.propTypes = {
  className: PropTypes.string,
};

NavController.defaultProps = {
  className: 'tool-nav',
};
export default NavController;
