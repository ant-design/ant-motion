---
order: 4
cols: 3
title: 时间轴效果
mouseEnter: true
---

鼠标经过可查看时间轴效果。


```jsx
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
    this.moment = null;
    this.state = {
      moment: null,
    };
    [
      'onChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(e) {
    if (e.mode === 'onComplete' && e.index === 6) {
      setTimeout(() => {
        this.setState({
          moment: 0,
        });
      }, 0);
    } else {
      this.setState({
        moment: null,
      });
    }
  }

  render() {
    return (
      <TweenOne
        animation={[
          { left: '-40%' },
          { left: '40%' },
          { top: '30px' },
          { scale: 0.7 },
          { scale: 1 },
          { top: 0 },
          { left: '0%' },
        ]}
        paused={this.props.paused}
        onChange={this.onChange}
        moment={this.state.moment}
        style={{ transform: 'scale(1)', position: 'relative' }}
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
