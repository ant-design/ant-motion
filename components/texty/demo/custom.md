---
order: 3
title: 
  zh-CN: 自定义
  en-US: Custom
---
## zh-CN
自定义动画效果

## en-US
Custom animation.

```jsx
import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';

class Demo extends React.Component{
  state = {
    show: true
  };
  getEnter = (e) => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: 'set',
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 },
          ],
          leave: {
            opacity: 0, scale: 0,
          },
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  }
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render(){
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        <p className="buttons" style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <Texty enter={this.getEnter} leave={this.getEnter}>{this.state.show && 'Ant Motion'}</Texty>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```