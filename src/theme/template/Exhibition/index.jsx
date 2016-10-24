import React from 'react';
import TweenOne from 'rc-tween-one';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default class Exhibition extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    pageData: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'exhibition-list',
  };

  render() {
    const demo = this.props.pageData.demo;
    const listChildren = Object.keys(demo).map(key => demo[key])
      .sort((a, b) => a.meta.order - b.meta.order)
      .map((item) => {
        const img = item.meta.image;
        const link = item.meta.filename.replace(/(\/index)|(.md)/g, '');
        const title = item.meta.chinese || item.meta.english;
        return (<li key={link}>
          <Link to={link}>
            <img src={img} width="100%" />
          </Link>
          <h3>{title}</h3>
        </li>);
      });
    return (<div className="page">
      <div className="page-wrapper">
        <TweenOne
          className={this.props.className}
          component="ul"
          animation={{ y: 30, type: 'from', opacity: 0 }}
        >
          {listChildren}
        </TweenOne>
      </div>
      <DocumentTitle title="动效展示 - Ant Motion" />
    </div>);
  }
}
