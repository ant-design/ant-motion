import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import DocumentTitle from 'react-document-title';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router';
import * as utils from '../utils';

class Exhibition extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    localizedPageData: PropTypes.object,
  };

  static defaultProps = {
    className: 'exhibition-list',
  };

  render() {
    const { locale } = this.props.intl;
    const demo = this.props.localizedPageData;
    const listChildren = Object.keys(demo).map((key) => demo[key])
      .sort((a, b) => b.meta.order - a.meta.order)
      .map((item) => {
        const img = item.meta.image;
        const link = utils.getLocalizedPathname(item.meta.filename.replace(/(\/index)|(.md)/g, ''), locale === 'zh-CN');
        const title = item.meta.title[locale];
        return (
          <li key={link}>
            <Link to={link}>
              <img alt="img" src={img} width="100%" />
            </Link>
            <h3>{title}</h3>
          </li>
        );
      });
    return (
      <div className="page-wrapper">
        <div className="page">
          <TweenOne
            className={this.props.className}
            component="ul"
            animation={{ y: 30, type: 'from', opacity: 0 }}
          >
            {listChildren}
          </TweenOne>
        </div>
        <DocumentTitle title="动效展示 - Ant Motion" />
      </div>
    );
  }
}

export default injectIntl(Exhibition);
