---
order: 3
title: 模糊效果
mouseEnter: true
---

鼠标经过可查看模糊效果。


```jsx
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ blur: '10px', yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        className="code-box-shape"
      />
    );
  }
}
Demo.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool,
};
ReactDOM.render(<Demo/>, mountNode);

```
