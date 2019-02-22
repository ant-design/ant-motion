---
order: 3
title: 
  zh-CN: 内置效果
  en-US: Type
---

## zh-CN
内置效果

## en-US
Built-in type.

```jsx
import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import 'rc-texty/assets/index.css';

import animType from 'rc-texty/lib/animTypes';

const { Option } = Select;

class Demo extends React.Component{
  state = {
    show: true,
    mode: 'smooth',
    type: 'left',
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  onChange = (type) => {
    this.setState({
      type,
    });
  }

  onModeChange = (mode) => {
    this.setState({
      mode,
    });
  }

  render(){
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        <p className="buttons" style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <div style={{ fontSize: 14, marginBottom: 16 }}>
          type: 
          <Select onChange={this.onChange} defaultValue={this.state.type} style={{ width: 100, margin: '0 8px' }}>
            {Object.keys(animType).map(key => (<Option key={key} value={key}>{key}</Option>))}
          </Select>
          mode: 
          <Select onChange={this.onModeChange} defaultValue={this.state.mode} style={{ width: 100, marginLeft: 8 }}>
            {['smooth', 'reverse', 'random', 'sync'].map(key => (<Option key={key} value={key}>{key}</Option>))}
          </Select>
        </div>
        <Texty 
          type={this.state.type}
          mode={this.state.mode}
        >
          {this.state.show && 'Ant Motion'}
        </Texty>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```