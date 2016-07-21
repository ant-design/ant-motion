---
order: 0
cols: 4
title: 位移效果
mouseEnter: true
---

鼠标经过可查看位移效果。


```jsx
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        style={{ left: '-20%' }}
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
