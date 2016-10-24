import React, { PropTypes } from 'react';
import Item from './DemoItem';

class DemoLayout extends React.Component {
  renderChildren = () =>
    React.Children.map(this.props.children, (item) => {
      if (item.type === Item) {
        const vertical = item.props.vertical;
        if (typeof vertical === 'boolean') {
          return item;
        }
        return React.cloneElement(item, { vertical: this.props.vertical });
      }
      return null;
    });

  render() {
    const props = { ...this.props };
    delete props.vertical;
    return (
      <div className={this.props.className} {...props}>
        <ul>
          {this.renderChildren()}
        </ul>
      </div>
    );
  }
}

DemoLayout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};
DemoLayout.defaultProps = {
  className: 'demo-layout',
};
DemoLayout.Item = Item;
export default DemoLayout;
