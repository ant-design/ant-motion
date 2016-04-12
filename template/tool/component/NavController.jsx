import React, { PropTypes } from 'react';
import Common from './Common';
import TweenOne from 'rc-tween-one';
import { Button, Icon, Modal } from 'antd';
import scrollEvent from 'rc-scroll-anim/lib/EventDispatcher';
import { currentScrollTop } from 'rc-scroll-anim/lib/util';
import './Nav.less';
const confirm = Modal.confirm;

class NavController extends Common {
  constructor() {
    super(...arguments);
    this.state = {
      show: !this.getURLData('mode'),
      mode: !this.getURLData('mode'),
    };
    [
      'iconClick',
      'resetData',
      'switchMode',
      'makePageURL',
      'copyURL',
      'removeUrlData',
      'scrollEvent',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.scrollTop = currentScrollTop();
    this.scrollName = 'stop';
    scrollEvent.addEventListener('scroll', this.scrollEvent);
  }

  componentWillReceiveProps(nextProps) {
    const { defaultValue } = nextProps;
    this.setState({ defaultValue });
  }

  scrollEvent() {
    const scrollTop = currentScrollTop();
    let scrollName = 'stop';
    if (scrollTop > this.scrollTop + 30) {
      scrollName = 'bottom';
      this.scrollTop = scrollTop;
    } else if (scrollTop < this.scrollTop - 30) {
      scrollName = 'top';
      this.scrollTop = scrollTop;
    }
    if (this.scrollName !== scrollName) {
      if (scrollName === 'bottom') {
        this.setState({
          show: false,
        });
      } else if (scrollName === 'top') {
        this.setState({
          show: true,
        });
      }
      this.scrollName = scrollName;
    }
  }

  removeUrlData(name) {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    return url.replace(reg, '');
  }

  resetData() {
    const otherUrl = this.removeUrlData('config');
    location.reload();
    location.hash = `#${otherUrl}`;
  }

  iconClick() {
    const show = !this.state.show;
    this.setState({
      show,
    });
  }

  copyURL() {

  }

  makePageURL() {
    confirm({
      title: '你烘焙的动效页面已经出锅！请享用~',
      content: '你的链接',
      iconClassName: 'exclamation-circle purple',
      okText: '拷贝',
      className: 'abc',
      onOk: this.copyURL,
    });
  }

  switchMode() {
    const mode = !this.getURLData('mode');
    const otherUrl = this.removeUrlData('mode');
    location.hash = `#${otherUrl}${mode ? `&mode=${mode}` : ''}`;
    this.setState({
      show: !mode,
      mode: !mode,
    });
  }

  render() {
    return (
      <div {...this.props}>
        <TweenOne animation={{ y: this.state.show ? 0 : 64 }}
          className={`${this.props.className}-bar`}
        >
          <ul>
            <li><a href="../">返回主站</a></li>
            <li><a href="../#/cases/help">查看教程</a></li>
            <li><a onClick={this.resetData}>重置参数</a></li>
            <li>
              <Button type="primary" onClick={this.switchMode}>
                {!this.state.mode ? '编辑模式' : '预览模式'}
              </Button>
            </li>
            <li><Button type="primary" onClick={this.makePageURL}>生成页面</Button></li>
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
