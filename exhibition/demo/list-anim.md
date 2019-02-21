---
order: 3
title:
  zh-CN: 列表动画
  en-US: List Animate
content: 
  zh-CN: 在页面里，当我们想对区块内容进行动画时，需要解决元素的先后顺序与基本动画的属性。
  en-US: In the page, when we want to animate block content, we need to solve the sequence of elements and the attributes of basic animation.
image: https://zos.alipayobjects.com/rmsportal/ivfCWzEWHsTPWMW.png
---
## zh-CN
出场请拖动上面的列表往左，出现删除按扭后点击删除。

拖动的动画效果以 CSS(rc-animate) 实现的在文件包里，[查看 Demo](https://github.com/ant-design/ant-motion/tree/master/exhibition/js/);

## en-US

please drag the list above to the left, and click the delete button.

Drag animation effects in CSS (rc-animate) in the file package，[Demo](https://github.com/ant-design/ant-motion/tree/master/exhibition/js/);



````jsx
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

class ListDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'queue-demo',
  };

  constructor(props) {
    super(props);
    this.openIndex = null;
    this.position = {};
    this.state = {
      dataArray: [
        {
          img: 'https://zos.alipayobjects.com/rmsportal/riaksOILvYdFRfa.png',
          text: 'Senior Product Designer',
          key: 0,
        },
        {
          img: 'https://zos.alipayobjects.com/rmsportal/EMQSSlFQtGYEnWx.png',
          text: 'Senior Product Designer',
          key: 1,
        },
        {
          img: 'https://zos.alipayobjects.com/rmsportal/OCuGZXfRioLyhKF.png',
          text: 'Senior Product Designer',
          key: 2,
        },
        {
          img: 'https://zos.alipayobjects.com/rmsportal/agzYYwzggpOjqge.png',
          text: 'Senior Product Designer',
          key: 3,
        },
      ],
      animation: [],
      style: [],
    };
  }

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('touchend', this.onTouchEnd);
      window.addEventListener('mouseup', this.onTouchEnd);
    } else {
      window.attachEvent('ontouchend', this.onTouchEnd);
      window.attachEvent('onmouseup', this.onTouchEnd);
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('touchend', this.onTouchEnd);
      window.removeEventListener('mouseup', this.onTouchEnd);
    } else {
      window.detachEvent('onresize', this.onTouchEnd);
      window.detachEvent('onmouseup', this.onTouchEnd);
    }
  }

  onDelete = () => {
    const dataArray = this.state.dataArray;
    const deleteData = dataArray.filter(item => item.key === this.openIndex)[0];
    const i = dataArray.indexOf(deleteData);
    dataArray.splice(i, 1);
    delete this.state.style[this.openIndex];
    this.openIndex = null;
    this.setState({ dataArray });
  };

  onTouchStart = (e, i) => {
    if (this.openIndex || this.openIndex === 0) {
      const animation = this.state.animation;
      animation[this.openIndex] = { x: 0, ease: 'easeOutBack' };
      this.setState({ animation }, () => {
        delete this.state.style[this.openIndex];
      });
      this.openIndex = null;
      return;
    }
    this.index = i;
    this.mouseXY = {
      startX: e.touches === undefined ? e.clientX : e.touches[0].clientX,
    };
  };

  onTouchEnd = () => {
    if (!this.mouseXY) {
      return;
    }
    const animation = this.state.animation;
    if (this.position[this.index] <= -60) {
      this.openIndex = this.index;
      animation[this.index] = { x: -60, ease: 'easeOutBack' };
    } else {
      animation[this.index] = { x: 0, ease: 'easeOutBack' };
    }

    delete this.mouseXY;
    delete this.position[this.index];
    this.index = null;
    this.setState({ animation });
  };

  onTouchMove = (e) => {
    if (!this.mouseXY) {
      return;
    }
    const currentX = e.touches === undefined ? e.clientX : e.touches[0].clientX;
    let x = currentX - this.mouseXY.startX;
    x = x > 10 ? 10 + (x - 10) * 0.2 : x;
    x = x < -60 ? -60 + (x + 60) * 0.2 : x;
    this.position[this.index] = x;
    const style = this.state.style;
    style[this.index] = { transform: `translateX(${x}px)` };
    const animation = [];
    this.setState({ style, animation });
  };

  render() {
    const liChildren = this.state.dataArray.map((item) => {
      const { img, text, key } = item;
      return (<li
        key={key}
        onMouseMove={this.onTouchMove}
        onTouchMove={this.onTouchMove}
      >
        <div className={`${this.props.className}-delete`}>
          <a onClick={(e) => { this.onDelete(e); }}>删除</a>
        </div>
        <TweenOne
          className={`${this.props.className}-content`}
          onTouchStart={e => this.onTouchStart(e, key)}
          onMouseDown={e => this.onTouchStart(e, key)}
          onTouchEnd={this.onTouchEnd}
          onMouseUp={this.onTouchEnd}
          animation={this.state.animation[key]}
          style={this.state.style[key]}
        >
          <div className={`${this.props.className}-img`}>
            <img src={img} width="44" height="44" onDragStart={e => e.preventDefault()} />
          </div>
          <p>{text}</p>
        </TweenOne>
      </li>);
    });
    return (<div>
      <div className={`${this.props.className}-wrapper`}>
        <div className={this.props.className}>
          <div className={`${this.props.className}-header`}>
            <i />
            <span>Ant Motion</span>
          </div>
          <QueueAnim
            component="ul"
            animConfig={[
              { opacity: [1, 0], translateY: [0, 30] },
              { height: 0 },
            ]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]}
            interval={150}
          >
            {liChildren}
          </QueueAnim>
        </div>
      </div>
    </div>);
  }
}
ReactDOM.render(
  <ListDemo />
, mountNode);
````

````css
.queue-demo-wrapper {
  position: relative;
  background: #CCE9F9;
  overflow: hidden;
  height: 340px;
}

.queue-demo {
  max-width: 300px;
  width: 90%;
  height: 340px;
  margin: auto;
  background: #fff;
  box-shadow: 0 5px 20px rgba(66, 86, 105, 0.8);
  cursor: url('http://gtms02.alicdn.com/tps/i2/T1_PMSFLBaXXcu5FDa-20-20.png') 10 10,pointer!important;
}

.queue-demo-header {
  height: 60px;
  border-top: 10px solid #265783;
  background: #29659B;
  line-height: 50px;
  color: #fff;
}

.queue-demo-header i {
  width: 15px;
  height: 2px;
  background: #fff;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-left: 10px;
  top: -2px;
}

.queue-demo-header i:before, .queue-demo-header i:after {
  display: block;
  content: '';
  background: #fff;
  width: 15px;
  height: 2px;
  position: absolute;
}

.queue-demo-header i:before {
  top: -4px;
}

.queue-demo-header i:after {
  top: 4px;
}

.queue-demo-header span {
  margin-left: 20px;
  font-size: 14px;
}

.queue-demo ul {
  overflow: hidden;
}

.queue-demo ul li {
  list-style: none;
  overflow: hidden;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #efefef;
  /*
  cursor: move;
  cursor: grab;
  cursor: -webkit-grab;
  */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  position: relative;
}

.queue-demo-img, .queue-demo ul li p {
  display: inline-block;
}
.queue-demo ul li.queue-anim-leaving{
  position: relative !important;
}
.queue-demo-img {
  margin: 0 20px;
}

.queue-demo-delete {
  width: 60px;
  background: #FF4058;
  text-align: center;
  font-size: 16px;
  height: 67px;
  position: absolute;
  right: 0;
  top: 1px;
}

.queue-demo-delete a {
  color: #fff;
  width: 100%;
  height: 100%;
  display: block;
}

.queue-demo-content {
  background: #fff;
  position: relative;
}

````
