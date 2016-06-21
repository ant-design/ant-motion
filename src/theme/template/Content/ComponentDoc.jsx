import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import * as utils from '../utils';
import DocumentTitle from 'react-document-title';

class ComponentDoc extends React.Component {
  render() {
    console.log(this.props)
    return this.props.children
  }
}

export default ComponentDoc;
