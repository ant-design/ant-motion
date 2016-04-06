import React, { PropTypes } from 'react';
import assign from 'object-assign';

function noop() {
};

class List extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      defaultValue: this.props.defaultValue,
    };
    [
      'listOnClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  listOnClick(value, e) {
    this.props.onChange(value, e);
    this.setState({
      defaultValue: value,
    })
  }

  render() {
    const childrenToRender = React.Children.toArray(this.props.children).map(item => {
      if (!item.props.value) {
        return item;
      }
      const props = assign({}, item.props);
      props.className = (props.className || '').replace('active', '');
      if (item.props.value === this.state.defaultValue) {
        props.className = `${props.className} active`.trim();
      }
      props.onClick = this.listOnClick.bind(this, item.props.value);
      return React.cloneElement(item, props);
    });
    return React.createElement(
      this.props.component,
      { ...this.props },
      childrenToRender
    )
  }
}

List.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

List.defaultProps = {
  component: 'ul',
  onChange: noop,
};

export default List;
