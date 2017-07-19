---
order: 4
title: 时间轴效果
mouseEnter: true
---

鼠标经过或手指按下可查看时间轴效果。


```jsx
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
    this.animation = [
      { left: '-40%' },
      { left: '40%' },
      { top: '30px' },
      { scale: 0.7 },
      { scale: 1 },
      { top: 0 },
      { left: '0%' },
    ];
    this.state = {
      moment: null,
    };
  }

  onChange = (e) => {
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
        animation={this.animation}
        paused={this.props.paused}
        onChange={this.onChange}
        moment={this.state.moment}
        style={{ transform: 'scale(1)' }}
        className="code-box-shape"
      />
    );
  }
}
Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
ReactDOM.render(<Demo/>, mountNode);

```
