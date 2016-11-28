import React, { PropTypes } from 'react';

import { toArrayChildren } from '../../../theme/template/utils';

export default class InputGroup extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    component: PropTypes.any,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: 'edit-input-group',
    component: 'div',
    onChange: () => {
    },
  };

  constructor(props) {
    super(props);
    this.values = toArrayChildren(this.props.children)
      .map(item => (item.props.value || item.props.defaultValue || ''));
  }

  onChange = (i, e) => {
    const values = this.values;
    values[i] = e.target.value;
    this.props.onChange(values);
  }

  render() {
    const { ...props } = this.props;
    ['component', 'onChange'].forEach(key => delete props[key]);
    const children = toArrayChildren(props.children).map((item, i) => {
      if (!item) {
        return null;
      }
      const onChange = (e) => { this.onChange(i, e); };
      return React.cloneElement(item, { ...item.props, onChange });
    });
    return React.createElement(this.props.component, { ...props }, children);
  }
}
