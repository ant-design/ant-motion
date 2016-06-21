import React, { PropTypes } from 'react';
import * as utils from '../util';
import { getTagName, getChildren } from 'jsonml.js/lib/utils';
import { Link } from 'react-router';

class Article extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { content } = this.props;
    const { meta, intro, description } = content;
    const jumper = description.filter(node => getTagName(node) === 'h2'
    ).map((node) => (<li key={getChildren(node)[0].replace(/[,.~'!<>@#$%^&*()-+_=:\s]/g, '')}>
        <Link to={{
          pathname: this.props.pathname,
          query: { scrollTo: getChildren(node)[0].replace(/[,.~'!<>@#$%^&*()-+_=:\s]/g, '') },
        }}
        >
          { utils.jsonmlToComponent(this.props.pathname, getChildren(node)[0]) }
        </Link>
      </li>)
    );
    const childrenToRender = utils.jsonmlToComponent(this.props.pathname,
      ['section', { className: 'markdown' }].concat(description));
    return (
      <div className={this.props.className}>
        <h1>{meta.chinese || meta.english}</h1>
        <i className="dotted-line" />
        {
          !intro ? null :
            utils.jsonmlToComponent(
              location.pathname,
              ['section', { className: 'markdown' }].concat(intro)
              )
          }
        {
          jumper.length > 0 ?
          <section className="toc">
            <ul>{ jumper }</ul>
          </section> :
            null
          }
        {childrenToRender}
      </div>
    );
  }

}
Article.propTypes = {
  className: PropTypes.string,
  content: PropTypes.any,
  pathname: PropTypes.string,
};

Article.defaultProps = {
  className: 'markdown',
};
export default Article;
