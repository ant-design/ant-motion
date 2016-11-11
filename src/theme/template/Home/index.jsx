import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import ScrollLink from 'rc-scroll-anim/lib/ScrollLink';
import { scrollTo } from '../utils';

import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


class Home extends React.Component {
  static propTypes = {
    pageData: PropTypes.object,
    utils: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.tweenAnim = { y: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
  }

  scrollToTop = () => {
    scrollTo(0);
  };

  render() {
    return (
      <DocumentTitle title="Ant Motion - 一个 React 的动效设计解决方案">
        <div className="home-wrapper">
          <div className="nav-wrapper">
            <ScrollLink to="banner" showHeightActive={['100%', '30%']} />
            <ScrollLink to="page1" showHeightActive="30%" />
            <ScrollLink to="page2" showHeightActive={['30%', '70%']} />
            <ScrollLink to="page3" showHeightActive="70%" />
          </div>
          <Banner />
          <Page1
            pageData={this.props.pageData} utils={this.props.utils} tweenAnim={this.tweenAnim}
            onButtonClick={this.scrollToTop}
          />
          <Page2
            pageData={this.props.pageData} utils={this.props.utils} tweenAnim={this.tweenAnim}
            onButtonClick={this.scrollToTop}
          />
          <Page3 onButtonClick={this.scrollToTop} />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
