import React, { PropTypes } from 'react';
import * as utils from '../util';
import { Link } from 'react-router';

class Article extends React.Component {
  render() {
    const content = this.props.content;
    const jumper = content.description.filter(node => node.type === 'h2'
    ).map((node) => (<li key={node.children.replace(/[~'!<>@#$%^&*()-+_=:\s]/g, '')}>
        <Link to={{
          pathname: this.props.pathname,
          query: { scrollTo: node.children.replace(/[~'!<>@#$%^&*()-+_=:\s]/g, '') },
        }}
        >
          { node.children }
        </Link>
      </li>)
    );
    const childrenToRender =
      content.description.map(utils.objectToComponent.bind(null, this.props.pathname));

    return (
      <div className={this.props.className}>
        <h1>{content.meta.chinese || content.meta.english}</h1>
        <i className="dotted-line" />
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
