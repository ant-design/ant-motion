import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
import NavController from './components/NavController';
import ContentController from './components/ContentController';
import EditStateController from './components/EditStateController';

import { getURLData, getRect } from '../../templates/template/utils';

import '../static/style';

const $ = window.$;


class Edit extends React.Component {
  constructor(props) {
    super(props);
    const urlData = this.getUrlData();
    this.state = {
      selectRect: null,
      enterRect: null,
      enterDom: null,
      urlData,
      urlHash: this.getHash(urlData),
      tabsKey: '1',
      editId: null,
      iframeHeight: null,
      isMode: false,
    };
  }

  componentDidMount() {
    $('#preview').load(() => {
      this.setState({
        iframeHeight: $('#preview').contents().height(),
      }, () => {
        $('#preview').contents().find('body #react-content').mousemove((e) => {
          const dom = this.getByIdDom(e.target);
          if (!dom || dom.id.match(/react-content|\$/g)) {
            return;
          }
          if (dom !== this.state.enterDom) {
            if (this.state.enterDom) {
              $(this.state.enterDom).unbind('click', this.onClick);
            }
            dom.style.cursor = 'pointer';
            const jDom = $(dom);
            const rect = getRect(jDom);
            jDom.click(this.onClick);
            this.setState({ enterDom: dom, enterRect: rect });
          }
        });
        $('#preview').contents().find('body #react-content').mouseleave(() => {
          if (this.state.enterDom) {
            $(this.state.enterDom).unbind('click', this.onClick);
          }
          this.setState({ enterDom: null, enterRect: null });
        });
        $('#preview').contents().scroll(this.onScroll);

        $(window).resize(this.onResize);
      });
    });
    const isMode = [
      'Android', 'iPhone', 'SymbianOS',
      'Windows Phone', 'iPad', 'iPod',
    ].filter(key =>
      navigator.userAgent.indexOf(key) > 0)[0];
    if (isMode) {
      Modal.warning({
        title: '警告!!!',
        content: '请在电脑端查看并编辑此页面',
        width: 550,
      });
    }
  }

  onChangeTabs = (key) => {
    this.setState({
      tabsKey: key,
    });
  }

  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dom = e.currentTarget;
    const editId = dom.id;
    // const selectRect = dom.getBoundingClientRect();
    const rect = getRect($(dom));
    this.setState({ selectRect: rect, tabsKey: '2', editId });
  }

  onResize = () => {
    if (this.state.editId) {
      /* const dom = $('#preview').contents().find(`#${this.state.editId}`);
       if (dom.length) {
       const rect = getRect(dom);
       this.setState({ selectRect: rect });
       } else {
       this.selectHide = true;
       } */
      // 窗口变动关掉所以操作, 回到选择 tabs;
      this.setState({
        editId: null,
        selectRect: null,
        tabsKey: '1',
        iframeHeight: $('#preview').contents().height(),
      });
    } else {
      this.setState({
        iframeHeight: $('#preview').contents().height(),
      });
    }
  };

  onScroll = (e) => {
    const scrollTop = e.target.body.scrollTop || e.target.documentElement.scrollTop;
    const editState = ReactDOM.findDOMNode(this.editState);
    $(editState).scrollTop(scrollTop);
    /* if (this.selectHide) {
     const dom = $('#preview').contents().find(`#${this.state.editId}`);
     if (dom.length) {
     this.selectHide = false;
     const rect = getRect(dom);
     this.setState({ selectRect: rect });
     }
     } */
  };

  setUrlData = (obj, reload) => {
    const urlData = this.state.urlData;
    Object.keys(obj).forEach((key) => {
      urlData[key] = obj[key];
    });
    const urlHash = this.getHash(urlData);
    this.setState({
      urlHash,
      urlData,
    }, () => {
      // 更改 url 后, 更新 selectRect;
      if (!reload) {
        const dom = $('#preview').contents().find(`#${this.state.editId}`);
        if (dom.length) {
          const selectRect = getRect(dom);
          this.setState({
            selectRect,
            iframeHeight: $('#preview').contents().height(),
          });
        }
      } else {
        this.reloadIFrame();
      }
    });
  };

  getHash = (urlData) => {
    let urlHash = '';
    Object.keys(urlData).forEach((key) => {
      const mark = urlHash ? '&' : '#';
      const url = Array.isArray(urlData[key]) ?
        urlData[key].join(',') : JSON.stringify(urlData[key]);
      urlHash += `${mark}${encodeURIComponent(`${key}=${url}`)}`;
    });
    return urlHash;
  }

  getUrlData = () => {
    const tData = getURLData('t');
    const otherData = getURLData('o');
    const cData = getURLData('c');
    const urlData = {};
    if (tData) {
      urlData.t = tData.split(',');
    }
    if (otherData) {
      urlData.o = otherData.split(',');
    }
    if (cData) {
      urlData.c = JSON.parse(cData);
    }
    // window.location.hash = '';
    return urlData;
  };

  getByIdDom = (item) => {
    if (item.id && !item.id.match(/react-content|\$/g)) {
      return item;
    }
    return item.parentNode && this.getByIdDom(item.parentNode);
  };

  typeSwitch = (isMode) => {
    this.setState({
      isMode,
      selectRect: null,
      editId: null,
      tabsKey: '1',
    }, () => {
      this.setState({
        iframeHeight: $('#preview').contents().height(),
      });
    });
  };

  reloadIFrame = () => {
    clearTimeout(this.setTime);
    this.setTime = setTimeout(() => {
      $('#preview')[0].contentWindow.location.reload();
    }, 400);
    this.setState({ selectRect: null, editId: null });
  }

  render() {
    const location = window.location;
    const protocol = location.protocol;
    const isLocalMode = location.port;
    const port = isLocalMode ? ':8113' : '';
    const mainPath = isLocalMode ? '' : '/templates';
    const iframeSrc = `${protocol}//${location.hostname}${port}${mainPath}/${this.state.urlHash}`;
    return (<div>
      <NavController
        urlHash={this.state.urlHash}
        urlData={this.state.urlData}
        typeSwitch={this.typeSwitch}
        isMode={this.state.isMode}
      />
      <div className="edit-wrapper">
        <ContentController
          setUrlData={this.setUrlData}
          currentKey={this.state.tabsKey}
          onChangeTabs={this.onChangeTabs}
          editId={this.state.editId}
          urlData={this.state.urlData}
          isMode={this.state.isMode}
        />
        <div className="preview-wrapper">
          <div className={`edit-cover ${this.state.isMode ? 'edit-phone' : ''}`}>
            {this.state.isMode && (<div className="phone-head">
              <em className="camera" />
              <em className="receiver" />
            </div>)}
            <div className="edit-iframe-wrapper">
              <div className="preview-container">
                <iframe id="preview" src={iframeSrc} />
              </div>
              <EditStateController
                enterRect={this.state.enterRect}
                selectRect={this.state.selectRect}
                height={this.state.iframeHeight}
                ref={(c) => {
                  this.editState = c;
                }}
              >
                {this.state.enterDom && this.state.enterDom.id}
              </EditStateController>
            </div>
            {this.state.isMode && (<div className="phone-footer">
              <em className="home-key" />
            </div>)}
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Edit;
