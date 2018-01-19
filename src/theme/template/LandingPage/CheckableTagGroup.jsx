import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
CheckableTag.isCheckableTag = true;

export default class CheckableTagGroup extends React.Component {
  static propTypes = {
    component: PropTypes.any,
    children: PropTypes.any,
    defaultValue: PropTypes.any,
    allName: PropTypes.any,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    component: 'div',
    defaultValue: 'all',
    allName: '全部页面',
  }

  constructor(props) {
    super(props);
    const checkedTags = props.defaultValue === 'all' ?
      React.Children.map(
        props.children,
        child => child.type.isCheckableTag && (child.props.value || child.key)
      ) :
      props.defaultValue;
    this.state = {
      checkedTags,
    };
  }

  onSelectTag = (key, checked) => {
    // 默认不可出现空数组，全部取消时为全部分类
    let { checkedTags } = this.state;
    if (key === 'all') {
      checkedTags = this.allTags;
      this.setState({
        // checkedTags: checked ? this.allTags : [],
        checkedTags,
      });
    } else {
      const index = checkedTags.indexOf(key);
      if (checked && index === -1) {
        checkedTags.push(key);
      } else if (!checked && index > -1 && checkedTags.length > 1) {
        checkedTags.splice(index, 1);
      } else {
        checkedTags = this.allTags;
      }
      this.setState({ checkedTags });
    }
    if (this.props.onChange) {
      this.props.onChange(checkedTags);
    }
  }

  getChildrenToRender = () => {
    const { checkedTags } = this.state;
    const { children, allName } = this.props;
    this.allTags = [];
    const childArray = React.Children.map(children, (child) => {
      if (child.type.isCheckableTag) {
        const key = child.props.value || child.key;
        this.allTags.push(key);
        return React.cloneElement(child, {
          key: child.key,
          checked: checkedTags.indexOf(key) > -1,
          onChange: (bool) => {
            this.onSelectTag(key, bool);
          },
        });
      }
      return child;
    });
    return [
      <CheckableTag
        key="tag-all"
        checked={checkedTags.length === this.allTags.length}
      >
        {allName}
      </CheckableTag>,
    ].concat(childArray);
  }

  render() {
    const { ...props } = this.props;
    ['component', 'defaultValue', 'allName'].forEach((key) => { delete props[key]; });
    const childrenToRender = this.getChildrenToRender();
    return (React.createElement(this.props.component, { ...props }, childrenToRender));
  }
}
