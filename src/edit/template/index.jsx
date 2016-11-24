import React from 'react';
import NavController from './components/NavController';
import ContentController from './components/ContentController';
import EditStateController from './components/EditStateController';

import { getURLData } from '../../templates/template/utils';

import '../static/style';

const $ = window.$;


class Edit extends React.Component {
  constructor(props) {
    super(props);
    const urlData = this.getUrlData();
    this.state = {
      selectDom: null,
      enterDom: null,
      clickDom: null,
      urlData,
      urlHash: this.getHash(urlData),
      tabsKey: '1',
      editId: null,
    };
  }

  componentDidMount() {
    $('#preview').load(() => {
      $('#preview').contents().find('body #react-content').mousemove((e) => {
        const dom = this.getByIdDom(e.target);
        if (dom !== this.state.enterDom) {
          if (this.state.enterDom) {
            this.state.enterDom.removeEventListener('click', this.onClick);
          }
          dom.style.cursor = 'pointer';
          dom.addEventListener('click', this.onClick);
          this.setState({ enterDom: dom });
        }
      });
      $('#preview').contents().find('body #react-content').mouseleave(() => {
        if (this.state.enterDom) {
          this.state.enterDom.removeEventListener('click', this.onClick);
        }
        this.setState({ enterDom: null });
      });
    });
  }

  onClick = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    const dom = e.currentTarget;
    const editId = dom.id;

    this.setState({ selectDom: dom, tabsKey: '2', editId });
  }

  onChangeTabs = (key) => {
    this.setState({
      tabsKey: key,
    });
  }

  setUrlData = (obj) => {
    const urlData = this.state.urlData;
    Object.keys(obj).forEach((key) => {
      urlData[key] = obj[key];
    });

    const urlHash = this.getHash(urlData);
    this.setState({
      urlHash,
      urlData,
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
    if (item.id) {
      return item;
    }
    return item.parentNode && this.getByIdDom(item.parentNode);
  };

  render() {
    return (<div>
      <NavController />
      <div className="edit-wrapper">
        <ContentController
          setUrlData={this.setUrlData}
          currentKey={this.state.tabsKey}
          onChangeTabs={this.onChangeTabs}
          editId={this.state.editId}
          urlData={this.state.urlData}
        />
        <div className="preview-container">
          <iframe id="preview" src={`/templates/${this.state.urlHash}`} />
        </div>
        <EditStateController
          enterDom={this.state.enterDom}
          selectDom={this.state.selectDom}
        />
      </div>
    </div>);
  }
}

export default Edit;
