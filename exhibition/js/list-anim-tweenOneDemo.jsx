import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import './list-anim-animateDemo.css';

export default class ListDemo extends React.Component {
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
