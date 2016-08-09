import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';

function toArrayChildren(children) {
  const ret = [];
  React.Children.forEach(children, (c) => {
    ret.push(c);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  let ret = null;
  if (children) {
    children.forEach((c) => {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  let ret = [];
  // 保存更改后的顺序，新增的在新增时的位置插入。
  prev.forEach(c => {
    if (!c) {
      return;
    }
    const newChild = findChildInChildrenByKey(next, c.key);
    if (newChild) {
      ret.push(newChild);
    }
  });

  next.forEach((c, i) => {
    if (!c) {
      return;
    }
    const newChild = findChildInChildrenByKey(prev, c.key);
    if (!newChild) {
      ret.splice(i, 0, c);
    }
  });
  return ret;
}


export default class ListSort extends React.Component {
  static contextTypes = {
    component: React.PropTypes.any,
    components: React.PropTypes.array,
    animType: React.PropTypes.string,
    onChange: React.PropTypes.bool,
  };

  static defaultProps = {
    component: 'div',
    components: [],
    animType: 'y',
    onChange: () => {
    },
  };

  constructor() {
    super(...arguments);
    this.state = {
      children: this.props.children,
      style: {},
      childStyle: [],
      animation: []
    };
    this.index = null;
    this.swapIndex = null;
    this.mouseXY = null;
    this.childStyle = [];
    this.children = [];
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);

    if (window.addEventListener) {
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('touchmove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
      window.addEventListener('touchend', this.onMouseUp);
    } else {
      window.attachEvent('onmousemove', this.onMouseMove);
      window.attachEvent('ontouchmove', this.onMouseMove);
      window.attachEvent('onmouseup', this.onMouseUp);
      window.attachEvent('ontouchend', this.onMouseUp);
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentChildren = this.state.children;
    const nextChildren = nextProps.children;
    const newChildren = mergeChildren(currentChildren, nextChildren);
    this.setState({ children: newChildren });
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('touchend', this.onMouseUp);
    } else {
      window.detachEvent('onmousemove', this.onMouseMove);
      window.detachEvent('ontouchmove', this.onMouseMove);
      window.detachEvent('onmouseup', this.onMouseUp);
      window.detachEvent('ontouchend', this.onMouseUp);
    }
  }

  onMouseDown = (i, e) => {
    const rect = this.dom.getBoundingClientRect();
    const style = {
      height: `${rect.height}px`,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
    };
    this.children = Array.prototype.slice.call(this.dom.children);
    this.childStyle = [];
    const childStyle = this.children.map((item, ii) => {
      const itemRect = item.getBoundingClientRect();
      const d = {
        width: itemRect.width,
        height: itemRect.height,
        top: item.offsetTop,
        left: item.offsetLeft,
        position: 'absolute',
        zIndex: ii === i ? 1 : 0,
      };
      this.childStyle.push({ ...d });
      return d;
    });
    const animation = this.children.map((item, ii) => {
      if (i === ii) {
        return { scale: 1, boxShadow: '0 10px 10px rgba(0,0,0,0.15)' };
      }
    });
    this.index = i;
    this.swapIndex = i;
    this.mouseXY = {
      startX: e.touches === undefined ? e.clientX : e.touches[0].clientX,
      startY: e.touches === undefined ? e.clientY : e.touches[0].clientY,
      top: childStyle[i].top,
      left: childStyle[i].left,
    };
    this.setState({
      style,
      childStyle,
      animation,
    })
  };

  onMouseUp = () => {
    this.mouseXY = null;
    const animation = this.state.animation.map((item, i) => {
      if (this.index === i) {
        const animate = {};
        let height = 0;
        if (this.props.animType === 'y') {
          if (this.swapIndex > this.index) {
            const start = this.index + 1;
            const end = this.swapIndex + 1;
            this.childStyle.slice(start, end).forEach(_item =>
              height += _item.height
            );
            animate.top = height + this.childStyle[this.index].top;
          } else {
            animate.top = this.childStyle[this.swapIndex].top;
          }
        }
        return {
          scale: 1,
          boxShadow: '0 0px 0px rgba(0,0,0,0)',
          ...animate,
          onComplete: () => {
            const children = this.sortArray(this.state.children, this.swapIndex, this.index);
            const callbackBool = this.index !== this.swapIndex;
            this.index = null;
            this.childStyle = [];
            this.swapIndex = null;
            this.setState({
              style: {},
              childStyle: [],
              children,
              animation: [],
            }, () => {
              if (callbackBool) {
                this.props.onChange(children);
              }
            });
          }
        };
      }
      return item;
    });
    this.setState({ animation });
  };

  onMouseMove = (e) => {
    if (!this.mouseXY) {
      return;
    }
    this.mouseXY.x = e.touches === undefined ? e.clientX : e.touches[0].clientX;
    this.mouseXY.y = e.touches === undefined ? e.clientY : e.touches[0].clientY;
    let childStyle = this.state.childStyle;
    let animation = this.state.animation;


    if (this.props.animType === 'x') {
      // 懒得写现在没用。。。做成组件后加
      childStyle[this.index].left = this.mouseXY.x - this.mouseXY.startX + this.mouseXY.left;
    } else {
      childStyle[this.index].top = this.mouseXY.y - this.mouseXY.startY + this.mouseXY.top;
      this.swapIndex = childStyle[this.index].top < this.childStyle[this.index].top ?
        0 : this.index;
      this.swapIndex = childStyle[this.index].top >
      this.childStyle[this.index].top + this.childStyle[this.index].height ?
      childStyle.length - 1 : this.swapIndex;

      const top = childStyle[this.index].top;
      this.childStyle.forEach((item, i) => {
        const _top = item.top;
        const _height = item.height;
        if (top > _top && top < _top + _height) {
          this.swapIndex = i;
        }
      });
      animation = animation.map((item, i) => {
        // 到顶端
        let height = this.childStyle[this.index].height;
        if (this.index < this.swapIndex) {
          if (i > this.index && i <= this.swapIndex && this.swapIndex !== this.index) {
            const start = this.index + 1;
            const end = i;
            height = 0;
            this.childStyle.slice(start, end).forEach(_item =>
              height += _item.height
            );
            return { top: this.childStyle[this.index].top + height }
          } else if ((i > this.swapIndex || this.swapIndex === this.index) && i !== this.index) {
            return { top: this.childStyle[i].top };
          }
        } else if (this.index > this.swapIndex) {
          if (i < this.index && i >= this.swapIndex && this.swapIndex !== this.index) {
            height = this.childStyle[this.index].height;
            return { top: this.childStyle[i].top + height }
          } else if ((i < this.swapIndex || this.swapIndex === this.index) && i !== this.index) {
            return { top: this.childStyle[i].top };
          }
        } else {
          if (i !== this.index) {
            return { top: this.childStyle[i].top };
          }
        }
        return item
      });
    }
    this.setState({ childStyle, animation });
  };

  sortArray = (_array, nextNum, num) => {
    const current = _array[num];
    const array = _array.map(item => item);
    array.splice(num, 1);
    array.splice(nextNum, 0, current);
    return array;
  };

  getChildren = (item, i) => {
    const onMouseDown = this.onMouseDown.bind(this, i);
    const style = { ...this.state.childStyle[i] };
    if (Object.keys(style).length) {
      style.transform = 'none';
      style.boxShadow = 'none';
    }
    return React.createElement(TweenOne,
      {
        ...item.props,
        onMouseDown,
        onTouchStart: onMouseDown,
        style: { ...item.props, ...style },
        key: item.key,
        animation: this.state.animation[i],
        component: item.type,
      }
    )
  };

  render() {
    const childrenToRender = toArrayChildren(this.state.children).map(this.getChildren);
    const props = { ...this.props };
    ['component','components', 'animType'].forEach(key => delete props[key]);
    return React.createElement(this.props.component, {
      ...props,
      style: { ...this.state.style },
    }, childrenToRender);
  }
}
