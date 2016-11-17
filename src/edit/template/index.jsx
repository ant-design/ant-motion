import React from 'react';
import NavController from './components/NavController';
import ContentController from './components/ContentController';
import '../static/style';

const $ = window.$;

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $('#preview').load(() => {
      $('#preview').contents().find('body').mousemove((e) => {
        const dom = e.target;
        console.log(dom);
      });
    });
  }

  render() {
    return (<div>
      <NavController />
      <div className="edit-wrapper">
        <ContentController />
        <div id="editFrame" className="preview-container">
          <iframe id="preview" src="/templates/#t%3Dnav_0_0%2Cbanner_0_1%2Ccontent_1_3%2Ccontent_4_4%2Cfooter_1_5" />
        </div>
      </div>
    </div>);
  }
}

export default Edit;
