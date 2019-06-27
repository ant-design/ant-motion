---
order: 1
title:
  zh-CN: 列表交换位置
  en-US: List Sort
content: 
  zh-CN: 页面里的 List 拖动来重新排列顺序。
  en-US: Drag the List on the page to rearrange the order.
image: https://zos.alipayobjects.com/rmsportal/BgYxbsXLrUfkkRT.png
---
## zh-CN
ListSort 组件地址： [地址](https://github.com/ant-design/ant-motion/blob/master/site/theme/template/other/ListSort.jsx)

## en-US

ListSort: [Component URL](https://github.com/ant-design/ant-motion/blob/master/site/theme/template/other/ListSort.jsx)

```jsx
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import ListSort from '../../site/theme/template/other/ListSort';

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
];
class ListSortDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const {
        icon, color, title, text,
      } = item;
      return (
        <div key={i} className={`${this.props.className}-list`}>
          <div className={`${this.props.className}-icon`}>
            <Icon type={icon} style={{ color }} />
          </div>
          <div className={`${this.props.className}-text`}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      );
    });
    return (
      <div className={`${this.props.className}-wrapper`}>
        <div className={this.props.className}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ListSortDemo />
, mountNode);
```

```css
.list-sort-demo-wrapper {
  position: relative;
  background: #e6e6e6;
  overflow: hidden;
  height: 385px;
}

.list-sort-demo {
  margin: 40px auto;
  max-width: 350px;
  width: 90%;
  cursor: url('http://gtms02.alicdn.com/tps/i2/T1_PMSFLBaXXcu5FDa-20-20.png') 10 10,pointer!important;
  position: relative;
  height: 305px;
}
.list-sort-demo > div{
  overflow: hidden;
}

.list-sort-demo-list {
  background: #fff;
  border-radius: 6px;
  margin: 5px auto;
  padding: 10px;
  height: 70px;
  transition:  box-shadow .5s, transform .5s;
}

.list-sort-demo-list.list-drag-selected{
  box-shadow: 0 8px 20px #E6E6E6;
  transform: scale(1.1) !important;
}

.list-sort-demo-icon {
  width: 20%;
  display: inline-block;
  text-align: center;
  font-size: 24px;
  line-height: 50px;
  vertical-align: top;
}
.list-sort-demo-text{
  width: 80%;
  display: inline-block;
}

.list-sort-demo-text h1 {
  font-size: 18px;
}

.list-sort-demo-text p{
  font-size: 12px;
}

@media screen and (max-width: 320px) {
  .list-sort-demo-text h1 {
    font-size: 14px;
    line-height: 28px;
  }
}
```
