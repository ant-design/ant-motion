import React, { PropTypes } from 'react';
import { Input } from 'antd';

import { toArrayChildren } from '../../../theme/template/utils';

const Group = Input.Group;

export default class InputGroup extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.any,
    onChange: PropTypes.func,
    value: PropTypes.any,
    isMax: PropTypes.bool,
  };

  static defaultProps = {
    component: 'div',
    onChange: () => {
    },
  };

  constructor(props) {
    super(props);
    this.componentWillReceiveProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.values = toArrayChildren(nextProps.children)
      .map(item => (item.props.defaultValue || item.props.value));
  }

  onChange = (i, e) => {
    const values = this.values;
    const data = !i ? e || 0 : e;
    values[i] = e.target ? e.target.value : data;
    if (Array.isArray(values[i])) {
      values[i] = values[i].join('');
    }
    if (this.props.isMax) {
      this.props.onChange(values.join(''));
    } else {
      this.props.onChange(values);
    }
  }

  render() {
    const { ...props } = this.props;
    ['component', 'onChange', 'isMax'].forEach(key => delete props[key]);
    const children = toArrayChildren(props.children).map((item, i) => {
      if (!item) {
        return null;
      }
      const onChange = (e) => {
        this.onChange(i, e);
      };
      return React.cloneElement(item, { ...item.props, onChange });
    });
    return React.createElement(Group, { ...props, compact: true }, children);
  }
}
