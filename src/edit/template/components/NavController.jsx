import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal';
// import Tooltip from 'antd/lib/tooltip';
import message from 'antd/lib/message';
import CopyToClipboard from 'react-copy-to-clipboard';
import saveJsZip from './saveJsZip';

const confirm = Modal.confirm;
const $ = window.$;

class NavController extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    urlHash: PropTypes.string,
    urlData: PropTypes.object,
  };

  static defaultProps = {
    className: 'edit-nav',
  };

  constructor(props) {
    super(props);
    this.state = {
      helpOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { defaultValue } = nextProps;
    this.setState({ defaultValue });
  }


  onCopy = () => {
    message.success('拷贝成功，现在可以去分享你定制的页面了！');
  }

  removeUrlData = (name, hash) => {
    const url = decodeURIComponent(location.hash || hash).replace('#', '');
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    return url.replace(reg, '');
  }

  resetData = () => {
    const otherUrl = this.removeUrlData('c', this.props.urlHash);
    location.reload();
    location.hash = `#${encodeURIComponent(otherUrl)}`;
  }

  openLook = () => {
    Modal.warning({
      title: '注意事项',
      content: (<ul>
        <li>
          1. 在编辑时是数值注意旁边的单位，如 "px", "vh", "%"; "px" 为像素点, "vh" 屏幕高度的百分比;
        </li>
        <li>
          2. 多行参数顺序为 "左上 右上 左下 右下"
        </li>
        <li>
          3. 本站不提供图片上传功能，请自行解决图片上传的问题;
        </li>
        <li>

        </li>
      </ul>),
      width: 550,
    });
  };

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
        } else {
          message.error('生成链接失败,请稍候~');
        }
      },
    });
  }

  makePageURL = (url, title) => {
    this.shorten(url, (shortenUrl) => {
      confirm({
        title,
        content: shortenUrl,
        iconClassName: 'exclamation-circle purple',
        okText: <CopyToClipboard text={shortenUrl} onCopy={this.onCopy}>
          <span className="copy">拷贝</span>
        </CopyToClipboard>,
      });
    });
  }

  makePageURLPreview = () => {
    const url = `${location.origin}/templates/${this.props.urlHash}`;
    this.makePageURL(url, '你烘焙的动效页面已经出锅！请享用~');
  }
  makePageURLEdit = () => {
    const url = `${location.origin}${location.pathname}${this.props.urlHash}`;
    window.location.hash = this.props.urlHash;
    this.makePageURL(url, <p>当前编辑已保存, 如要再编辑<br />访问以下链接：</p>);
  }

  saveCode = () => {
    if (!location.port && window.ga) {
      window.ga('send', 'event', 'button', 'click', 'download');
    }
    saveJsZip(this.props.urlData);
  }
  openHelp = () => {
    this.setState({
      helpOpen: !this.state.helpOpen,
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <div
          className={`${this.props.className}-bar`}
        >
          <ul>
            <li><a onClick={this.openLook} className={`${this.props.className}-remark`}>
              <Icon type="exclamation-circle-o" />
              注意事项</a>
            </li>
            <li><a href="../">返回主站</a></li>
            <li><a onClick={this.resetData}>重置参数</a></li>
            <li>
              <a onClick={this.openHelp}>查看教程</a>
              <Modal
                visible={this.state.helpOpen}
                title={<h2>视频教程</h2>}
                width="800"
                onCancel={this.openHelp}
                footer={null}
              >
                <video
                  src="https://os.alipayobjects.com/rmsportal/GOsdyUIGZrNPSntOoRpe.mp4"
                  width="100%" controls autoPlay loop
                />
              </Modal>

            </li>
            <li>
              <Button type="primary" onClick={this.makePageURLEdit}>
                保存当前编辑
              </Button>
            </li>
            <li><Button type="primary" onClick={this.makePageURLPreview}>生成预览链接</Button></li>
            <li><Button type="primary" onClick={this.saveCode}>生成代码</Button></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavController;
