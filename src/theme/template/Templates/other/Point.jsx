import React from 'react';
import { Link } from 'rc-scroll-anim';
require('../assets/point.less');

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
      if (item.match('nav') || item.match('footer')) {
        return;
      }
      return <Link key={item} className={this.props.className} location={item} />
    }).filter(item => item);
    return (<div className={`${this.props.className}-wrapper`} style={this.props.style}>
      {children}
    </div>)
  }
}
