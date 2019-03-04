---
order: 8
title:
  zh-CN: 联动效果
  en-US: linked animate
content: 
  zh-CN: 鼠标经过一点的联动效果。
  en-US: Mouse hover a little linkage effect.
image: https://gw.alipayobjects.com/mdn/rms/afts/img/A*IavMRqJiT9AAAAAAAAAAAABjARQnAQ
---

## zh-CN

栅格布局，鼠标经过一点时，周围元素执行远离动画，适用于用户头像或背景图形。

## en-US

Grid layout, and when the mouse hover a little, the surrounding elements are executed away from the animation.


```jsx
import TweenOne from 'rc-tween-one';

class GridLayout {
  constructor(rect, width, height) {
    this.gridX = Math.floor(width / rect);
    this.gridY = Math.floor(height / rect);
    this.cellWidth = width / this.gridX;
    this.cellHeight = height / this.gridY;
    this.grid = [];
    for (let i = 0; i < this.gridY; i += 1) {
      this.grid[i] = [];
      for (let s = 0; s < this.gridX; s += 1) {
        this.grid[i][s] = [];
      }
    }
  }

  getCells = (e) => {
    const gridArray = [];
    const w1 = Math.floor((e.x - e.radius) / this.cellWidth);
    const w2 = Math.ceil((e.x + e.radius) / this.cellWidth);
    const h1 = Math.floor((e.y - e.radius) / this.cellHeight);
    const h2 = Math.ceil((e.y + e.radius) / this.cellHeight);
    for (let c = h1; c < h2; c += 1) {
      for (let l = w1; l < w2; l += 1) {
        gridArray.push(this.grid[c][l]);
      }
    }
    return gridArray;
  }

  hasCollisions = t => (
    this.getCells(t).some(e => e.some(v => this.collides(t, v)))
  )

  collides = (t, a) => {
    if (t === a) {
      return false;
    }
    const n = t.x - a.x;
    const i = t.y - a.y;
    const r = t.radius + a.radius;
    return n * n + i * i < r * r;
  }

  add = (value) => {
    this.getCells(value).forEach((item) => {
      item.push(value);
    });
  }
}

const getPointPos = (width, height, length) => {
  const grid = new GridLayout(150, width, height);
  const posArray = [];
  const num = 500;
  const radiusArray = [20, 35, 60];
  for (let i = 0; i < length; i += 1) {
    let radius;
    let pos;
    let j = 0;
    for(let j =0; j< num; j+=1) {
      radius = radiusArray[Math.floor(Math.random() * radiusArray.length)];
      pos = { x: Math.random() * (width - radius * 2) + radius, y: Math.random() * (height - radius * 2) + radius, radius };
      if (!grid.hasCollisions(pos)) {
        break;
      }
    }
    posArray.push(pos);
    grid.add(pos);
  }
  return posArray;
};

const getDistance = (t, a) => (Math.sqrt((t.x - a.x) * (t.x - a.x) + (t.y - a.y) * (t.y - a.y)));

class Point extends React.PureComponent {
  render() {
    const { tx, ty, x, y, opacity, backgroundColor, radius, ...props } = this.props;
    let transform;
    let zIndex = 0;
    let animation = { 
      y: (Math.random() * 2 - 1) * 20 || 15, 
      duration: 3000, 
      delay:Math.random() * 1000,
      yoyo: true,
      repeat: -1,
    };
    if (tx && ty) {
      if (tx !== x && ty !== y) {
        const distance = getDistance({ x, y }, { x: tx, y: ty });
        const g = Math.sqrt(2000000 / (0.1 * distance * distance));
        transform = `translate(${g * (x - tx) / distance}px, ${g * (y - ty) / distance}px)`;
      } else if (tx === x && ty === y) {
        transform = `scale(${80 / radius})`;
        animation = { y: 0, yoyo: false, repeat: 0, duration: 300 };
        zIndex = 1;
      }
    }
    return (
      <div
        style={{
          left: x - radius,
          top: y - radius,
          width: radius * 1.8,
          height: radius * 1.8,
          opacity,
          zIndex,
          transform,
        }}
        {...props}
      >
        <TweenOne
          animation={animation}
          style={{
            backgroundColor,
          }}
          className={`${this.props.className}-child`}
        />
      </div>

    );
  }
}

class LinkedAnimate extends React.Component {
  static defaultProps = {
    className: 'linked-animate-demo',
  };

  num = 50;// 点的个数

  constructor(props) {
    super(props);
    this.state = {
      data: getPointPos(1280, 600, this.num).map(item => ({
        ...item,
        opacity: Math.random() * 0.2 + 0.05,
        backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
      })),
      tx: 0,
      ty: 0,
    };
  }

  onMouseMove = (e) => {
    const cX = e.clientX;
    const cY = e.clientY;
    const boxRect = this.box.getBoundingClientRect();
    const pos = this.state.data.map((item) => {
      const { x, y, radius } = item;
      return { x, y, distance: getDistance({ x: cX - boxRect.x, y: cY - boxRect.y }, { x, y }) - radius };
    }).reduce((a, b) => {
      if (!a.distance || a.distance > b.distance) {
        return b;
      }
      return a;
    });
    if (pos.distance < 60) {
      this.setState({
        tx: pos.x,
        ty: pos.y,
      });
    } else {
      this.onMouseLeave();
    }
  }

  onMouseLeave = () => {
    this.setState({
      tx: 0,
      ty: 0,
    });
  }

  render() {
    const { className } = this.props;
    const { data, tx, ty } = this.state;
    return (
      <div className={`${className}-wrapper`}>
        <div
          className={`${className}-box`}
          ref={(c) => { this.box = c; }}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseLeave}
        >
          {data.map((item, i) => (
            <Point {...item} tx={tx} ty={ty} key={i.toString()} className={`${className}-block`} />
          ))}
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <LinkedAnimate />
, mountNode);
```

```css
.linked-animate-demo-wrapper {
  overflow: hidden;
  height: 500px;
  background: #019BF0;
  position: relative;
}

.linked-animate-demo-box {
  position: absolute;
  width: 1280px;
  height: 600px;
  display: block;
  left: -100%;
  top: 0;
  bottom: 0;
  right: -100%;
  margin: auto;
}

.linked-animate-demo-block {
  position: absolute;
  transition: transform .45s ease;
}

.linked-animate-demo-block-child {
  border-radius: 100%;
  width: 100%;
  height: 100%;
}
```