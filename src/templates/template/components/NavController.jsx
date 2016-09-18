import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { Button, Icon, Modal, Tooltip, message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import scrollEvent from 'rc-scroll-anim/lib/EventDispatcher';
import { currentScrollTop } from 'rc-scroll-anim/lib/util';
import { getURLData } from '../utils';
import saveJsZip from './saveJsZip';
import './Nav.less';
const confirm = Modal.confirm;
const $ = window.$;

class NavController extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: !getURLData('mode'),
      mode: !getURLData('mode'),
    };
    [
      'iconClick',
      'resetData',
      'switchMode',
      'makePageURL',
      'removeUrlData',
      'scrollEvent',
      'onCopy',
      'urlBack',
      'urlForward',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.scrollTop = currentScrollTop();
    this.scrollName = 'stop';
    scrollEvent.addEventListener('scroll', this.scrollEvent);
  }

  componentWillReceiveProps(nextProps) {
    const { defaultValue } = nextProps;
    this.setState({ defaultValue });
  }

  componentWillUnmount() {
    scrollEvent.removeEventListener('scroll', this.scrollEvent);
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
    const otherUrl = this.removeUrlData('c');
    location.reload();
    location.hash = `#${encodeURIComponent(otherUrl)}`;
  }

  iconClick() {
    const show = !this.state.show;
    this.setState({
      show,
    });
  }

  _shorten(url, cb) {
    // 调用 dwz.cn 服务, 使用中转服务器发请求
    const apiUrl = 'http://motion.applinzi.com/';
    const encodedUrl = encodeURIComponent(url);

    const reqUrl = `${apiUrl}?url=${encodedUrl}`;

    $.ajax({
      url: reqUrl,
      success: data => {
        if (data.tinyurl && cb) {
          cb(data.tinyurl);
        }
      },
    });
  }

  onCopy() {
    message.success('拷贝成功，现在可以去分享你定制的页面了！');
  }

  makePageURL() {
    const dataHref = location.hash;
    const sign = dataHref ? '&' : '#';
    this._shorten(`${location.href}${sign}make=true`, shortenUrl => {
      confirm({
        title: '你烘焙的动效页面已经出锅！请享用~',
        content: shortenUrl,
        iconClassName: 'exclamation-circle purple',
        okText: <CopyToClipboard text={shortenUrl} onCopy={this.onCopy}>
          <span className="copy">拷贝</span>
        </CopyToClipboard>,
      });
    });
  }

  switchMode() {
    const mode = !getURLData('mode');
    const otherUrl = this.removeUrlData('mode');
    location.hash = otherUrl ? `#${encodeURIComponent(otherUrl)}${mode ? `&mode=${mode}` : ''}`
      : `${mode ? `#mode=${mode}` : ''}`;
    this.setState({
      show: !mode,
      mode: !mode,
    });
  }

  urlBack() {
    history.back();
  }

  urlForward() {
    history.forward();
  }

  render() {
    const className = 'tool-nav';
    return (
      <TweenOne animation={{ y: 64, type: 'from' }} className={this.props.className}>
        <TweenOne animation={{ y: this.state.show ? 0 : 64 }}
          className={`${className}-bar`}
        >
          <ul className="undo-redo-bar">
            <Tooltip title="Undo">
              <li onClick={this.urlBack}><Icon type="left" /></li>
            </Tooltip>
            <Tooltip title="Redo">
              <li onClick={this.urlForward}><Icon type="right" /></li>
            </Tooltip>
          </ul>
          <ul>
            <li><a href="../">返回主站</a></li>
            <li><a href="/cases/help" disabled>查看教程</a></li>
            <li><a onClick={this.resetData}>重置参数</a></li>
            <li>
              <Button type="primary" onClick={this.switchMode}>
                {!this.state.mode ? '编辑模式' : '预览模式'}
              </Button>
            </li>
            <li><Button type="primary" onClick={this.makePageURL}>生成预览</Button></li>
            <li><Button type="primary" onClick={() => {saveJsZip(this.props.config)}}>保存代码</Button></li>
          </ul>
        </TweenOne>
        <div className={`${className}-icon`}
          onClick={this.iconClick}
        >
          <Icon type="caret-down" className={this.state.show ? '' : 'up'} />
        </div>
      </TweenOne>
    );
  }
}
NavController.propTypes = {
  className: PropTypes.string,
  config: PropTypes.object,
};

NavController.defaultProps = {
  className: 'tool-nav',
};
export default NavController;
