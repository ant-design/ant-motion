import React, { PropTypes } from 'react';
import Common from './Common';
import TweenOne from 'rc-tween-one';
import { Button, Icon } from 'antd';
import './Nav.less';

class NavController extends Common {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'iconClick',
      'resetData',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  resetData() {
    const configStr = this.getURLData('config');
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const reg = new RegExp(`(^|&)config=${configStr}`, 'i');
    const otherUrl = (url.replace(reg, '').split('&') || []).filter(_item => _item).join('&');
    location.reload();
    location.hash = `#${otherUrl}`;
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
        <TweenOne animation={{ y: this.state.show ? 0 : 64 }}
          className={`${this.props.className}-bar`}
        >
          <ul>
            <li><a href="http://motion.ant.design">返回主站</a></li>
            <li><a href="http://motion.ant.design/#/cases/help">查看教程</a></li>
            <li><a onClick={this.resetData}>重置参数</a></li>
            <li><Button type="primary">预览模式</Button></li>
            <li><Button type="primary">生成页面</Button></li>
          </ul>
        </TweenOne>
        <div className={`${this.props.className}-icon`}
          onClick={this.iconClick}
        >
          <Icon type="down" className={this.state.show ? '' : 'up'} />
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
