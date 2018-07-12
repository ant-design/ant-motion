---
order: 1
title: 文字切换
---

文字切换效果

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
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <Texty>{this.state.show && 'Ant Motion'}</Texty>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```