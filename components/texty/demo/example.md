---
order: 4
title: 
  zh-CN: 一个复杂些的例子
  en-US: Complex Example
vertical: true
---

## zh-CN
一个标题和正文内容的进场效果

## en-US
Entry effect of a title and body content.

```jsx
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';

class Demo extends React.Component {
  state = {
    show: true,
  }
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  onClick = () => {
    this.setState({
      show: false,
    }, () => {
      this.setState({
        show: true
      });
    });
  }
  render() {
    return (
      <div className="combined-wrapper">
        <div className="combined-reload">
          <Button shape="circle" icon="reload" onClick={this.onClick} />
        </div>
        {this.state.show && (
          <div className="combined">
            <div className="combined-shape">
              <div className="shape-left">
                <TweenOne
                  animation={[
                    { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
              <div className="shape-right">
                <TweenOne
                  animation={[
                    { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
            </div>
            <Texty
              className="title"
              type="mask-top"
              delay={400}
              enter={this.getEnter}
              interval={this.geInterval}
              component={TweenOne}
              componentProps={{
                animation: [
                  { x: 130, type: 'set' },
                  { x: 100, delay: 500, duration: 450 },
                  {
                    ease: 'easeOutQuart',
                    duration: 300,
                    x: 0,
                  },
                  {
                    letterSpacing: 0,
                    delay: -300,
                    scale: 0.9,
                    ease: 'easeInOutQuint',
                    duration: 1000,
                  },
                  { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                ],
              }}
            >
              Ant Motion
            </Texty>
            <TweenOne
              className="combined-bar"
              animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
            />
            <Texty
              className="content"
              type="bottom"
              split={this.getSplit}
              delay={2200}
              interval={30}
            >
              Animation specification and components of Ant Design.
            </Texty>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);
```
```css 
.combined-wrapper {
  padding: 0;
  background: linear-gradient(135deg, #329fff 1%, #8c00ff 100%);
  height: 300px;
  position: relative;
  width: 100%;
}
.combined-reload {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
.combined {
  color: #fff;
  width: 316px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.combined-shape {
  position: relative;
}
.combined-shape > * {
  width: 50%;
  height: 64px;
  position: absolute;
  overflow: hidden;
}
.combined-shape > * > * {
  width: 100%;
  height: 100%;
  background: #fff;
}
.combined-shape .shape-left {
  left: 0;
}
.combined-shape .shape-right {
  right: 0;
}
.combined .title {
  font-size: 58px;
  letter-spacing: 8px;
  position: absolute;
  width: 350px;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.combined-bar {
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 70px;
}
.combined .content {
  font-size: 12px;
  text-align: center;
  position: absolute;
  top: 78px;
}
```