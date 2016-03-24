import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header';
import Banner from './component/Banner';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Footer from './component/Footer';

import '../../common/ant-d.less';
import './assets/index.less';

class Home extends React.Component {
  render() {
    return (<section className="content-wap">
      <Header />
      <Banner />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </section>);
  }
}

ReactDOM.render(<Home />, document.getElementById('react-content'));
