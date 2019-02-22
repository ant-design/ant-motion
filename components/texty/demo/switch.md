---
order: 1
title: 
  zh-CN: 文字切换
  en-US: Switch
---

## zh-CN
文字切换效果

## en-US
Text switching.

```jsx
import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';

class Demo extends React.Component{
  state = {
    show: true
  };
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
        <Texty>{this.state.show && 'Ant Motion'}</Texty>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```