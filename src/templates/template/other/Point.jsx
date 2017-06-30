import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rc-scroll-anim';

export default class Point extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.array,
  };

  static defaultProps = {
    className: 'templates-list',
  };

  render() {
    const children = this.props.data.map((item) => {
      if (item.match('nav') || item.match('footer')) {
        return null;
      }
      return (<Link key={item} className={this.props.className} to={item} toHash={false} />);
    }).filter(item => item);
    return (<div className={`${this.props.className}-wrapper`} style={this.props.style}>
      {children}
    </div>);
  }
}
