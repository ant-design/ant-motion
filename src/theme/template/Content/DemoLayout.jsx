import React, { PropTypes } from 'react';
import assign from 'object-assign';
import Item from './DemoItem';

class DemoLayout extends React.Component {
  constructor() {
    super(...arguments);
  }

  renderChildren() {
    let num = 0;
    let boxNum = -1;
    let preCol;
    const colTotal = 24;
    const col = parseFloat(this.props.col);
    const childArr = [];
    React.Children.forEach(this.props.children, (item, i) => {
      if (item.type === Item) {
        const itemCol = parseFloat(item.props.col);
        const _col = itemCol || col;
        if (preCol !== _col) {
          // 不相等时就增加box
          boxNum++;
          num = 0;
        }
        preCol = _col;

        const int = colTotal / _col;
        const _int = num % int;

        const div = childArr[boxNum] ||
          <div key={boxNum} className={`${this.props.className}-wrapper`} />;
        const divProps = assign({}, div.props);

        const childrenToArr = React.Children.toArray(divProps.children);

        const ul = childrenToArr[_int] || <ul key={i} className={`ant-col-${_col}`} />;

        const ulProps = assign({}, ul.props);

        const _item = React.cloneElement(item, {
          key: num,
          col: _col,
        });
        ulProps.children = React.Children.toArray(ulProps.children);
        ulProps.children.push(_item);

        childrenToArr[_int] = React.cloneElement(ul, ulProps);

        divProps.children = childrenToArr;
        childArr[boxNum] = React.cloneElement(div, divProps);
        num++;
      }
    });
    return childArr;
  }

  render() {
    const props = { ...this.props };
    delete props.col;
    return (
      <div className={this.props.className} {...props}>
        {this.renderChildren()}
      </div>
    );
  }
}
const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
DemoLayout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  col: stringOrNumber,
};
DemoLayout.defaultProps = {
  className: 'demo-layout',
  col: 12,
};
DemoLayout.Item = Item;
export default DemoLayout;
