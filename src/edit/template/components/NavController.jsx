import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal';
import Tooltip from 'antd/lib/tooltip';
import message from 'antd/lib/message';
import CopyToClipboard from 'react-copy-to-clipboard';
import scrollEvent from 'rc-scroll-anim/lib/EventDispatcher';
import { currentScrollTop } from '../../../theme/template/utils';

const confirm = Modal.confirm;
const $ = window.$;

class NavController extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    config: PropTypes.object,
  };

  static defaultProps = {
    className: 'edit-nav',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
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

  onCopy = () => {
    message.success('拷贝成功，现在可以去分享你定制的页面了！');
  }

  scrollEvent = () => {
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

  removeUrlData = (name) => {
    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    return url.replace(reg, '');
  }

  resetData = () => {
    const otherUrl = this.removeUrlData('c');
    location.reload();
    location.hash = `#${encodeURIComponent(otherUrl)}`;
  }

  iconClick = () => {
    const show = !this.state.show;
    this.setState({
      show,
    });
  }

  shorten = (url, cb) => {
    // 调用 dwz.cn 服务, 使用中转服务器发请求
    const apiUrl = '//motion.applinzi.com/';
    const encodedUrl = encodeURIComponent(url);

    const reqUrl = `${apiUrl}?url=${encodedUrl}`;

    $.ajax({
      url: reqUrl,
      success: (data) => {
        if (data.tinyurl && cb) {
          cb(data.tinyurl);
        }
      },
    });
  }

  makePageURL = () => {
    const dataHref = location.hash;
    const sign = dataHref ? '&' : '#';
    this.shorten(`${location.href}${sign}make=true`, (shortenUrl) => {
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

  urlBack = () => {
    history.back();
  }

  urlForward = () => {
    history.forward();
  }

  render() {
    return (
      <div className={this.props.className}>
        <div
          className={`${this.props.className}-bar`}
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
                生成编辑链接
              </Button>
            </li>
            <li><Button type="primary" onClick={this.makePageURL}>生成预览链接</Button></li>
            <li><Button type="primary" onClick={() => { saveJsZip(this.props.config); }}>保存代码</Button></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavController;
