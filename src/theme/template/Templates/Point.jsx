import React from 'react';
import { Link } from 'rc-scroll-anim';
require('./assets/point.less');

export default class Point extends React.Component{
  static contextTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    data: React.PropTypes.array,
  };

  static defaultProps = {
    className: 'templates-list',
  };

  render(){
    const children = this.props.data.map(item => {
      const location = item.replace('_', '');
      if (location.indexOf('nav') >= 0) {
        return;
      }
      return <Link key={item} className={this.props.className} location={location} />
    }).filter(item => item);
    return (<div className={`${this.props.className}-wrapper`} style={this.props.style}>
      {children}
    </div>)
  }
}
