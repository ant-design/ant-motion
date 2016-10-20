import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import { currentScrollTop } from '../utils';

TweenOne.plugins.push(SvgDrawPlugin);

export default class Demo extends React.Component {
  static propTypes = {
    image: React.PropTypes.string,
  };

  static defaultProps = {
    image: 'https://zos.alipayobjects.com/rmsportal/fbbUPUkdhvXwRYp.png',
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
    this.gather = true;
    this.intervalTime = 8000;
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
  }

  componentWillUnmount() {
    ticker.clear(this.interval);
    this.interval = null;
  }

  onMouseEnter = () => {
    // !this.gather && this.updateTweenData();
    if (!this.gather) {
      this.updateTweenData();
    }
    this.componentWillUnmount();
  };

  onMouseLeave = () => {
    // this.gather && this.updateTweenData();
    if (this.gather) {
      this.updateTweenData();
    }
    this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
  };

  setDataToDom(data, w, h) {
    this.pointArray = [];
    const number = Math.round(w / 15);
    for (let i = 0; i < w; i += number) {
      for (let j = 0; j < h; j += number) {
        if (data[((i + j * w) * 4) + 3] > 150) {
          this.pointArray.push({ x: i, y: j });
        }
      }
    }

    const children = [];
    this.pointArray.forEach((item, i) => {
      const r = Math.random() * 20 + 10;
      const b = Math.random() * 0.5 + 0.15;
      children.push(
        <TweenOne className="point-wrapper" key={i} style={{ left: item.x, top: item.y }}>
          <TweenOne
            className="point"
            style={{
              width: r,
              height: r,
              opacity: b,
              backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
            }}
            animation={{
              y: (Math.random() * 2 - 1) * 10 || 5,
              x: (Math.random() * 2 - 1) * 5 || 2.5,
              delay: Math.random() * 1000,
              repeat: -1,
              duration: 3000,
              yoyo: true,
              ease: 'easeInOutQuad',
            }}
          />
        </TweenOne>
      );
    });
    this.pointArray.push({ x: 75, y: 180 });
    children.push(
      <TweenOne
        className="point-wrapper" key={children.length}
        style={{
          left: 75,
          top: 180,
        }}
      >
        <TweenOne
          className="point"
          style={{
            width: 40,
            height: 40,
            left: 75,
            top: 180,
            backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animation={{
            y: (Math.random() * 2 - 1) * 10 || 5,
            x: (Math.random() * 2 - 1) * 5 || 2.5,
            delay: Math.random() * 1000,
            repeat: -1,
            duration: 3000,
            yoyo: true,
            ease: 'easeInOutQuad',
          }}
        />
      </TweenOne>
    );
    this.setState({
      children,
      boxAnim: { opacity: 0, type: 'from', duration: 800 },
    }, () => {
      this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
    });
  }

  createPointData = () => {
    const w = 265;
    const h = 290;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    canvas.width = w;
    canvas.height = h;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, w, h).data;
      this.setDataToDom(data, w, h);
      this.dom.removeChild(canvas);
    };
    img.crossOrigin = 'anonymous';
    img.src = this.props.image;
  };

  gatherData = () => {
    const children = this.state.children.map(item =>
      React.cloneElement(item, {
        animation: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          delay: Math.random() * 500,
          duration: 800,
          ease: 'easeInOutQuint',
        },
      })
    );
    this.setState({ children });
  };

  disperseData = () => {
    const rect = this.dom.getBoundingClientRect();
    const sideRect = this.sideBox.getBoundingClientRect();
    const sideTop = sideRect.top + currentScrollTop();
    const children = this.state.children.map(item =>
      React.cloneElement(item, {
        animation: {
          x: Math.random() * document.body.clientWidth - sideRect.left - item.props.style.left,
          y: Math.random() * rect.height - sideTop - item.props.style.top,
          opacity: Math.random() * 0.5,
          scale: Math.random() * 2.5,
          duration: Math.random() * 500 + 500,
          ease: 'easeInOutQuint',
        },
      })
    );

    this.setState({
      children,
    });
  };

  updateTweenData = () => {
    this.dom = ReactDOM.findDOMNode(this);
    this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
    ((this.gather && this.disperseData) || this.gatherData)();
    this.gather = !this.gather;
  };

  render() {
    return (<div className="logo-demo">
      <canvas id="canvas" />
      <TweenOne
        component="svg"
        animation={{ opacity: 0, delay: 1200, duration: 800, onStart: this.createPointData }}
        className="right-side"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <TweenOne
          d="M30,265L30,25"
          component="path"
          animation={[
            { opacity: 0, type: 'from', delay: 300, duration: 0 },
            { SVGDraw: 0, type: 'from', duration: 200, ease: 'easeInQuart' },
          ]}
        />
        <TweenOne
          d="M30,25L137,135"
          component="path"
          animation={[
            { opacity: 0, type: 'from', delay: 500, duration: 0 },
            { SVGDraw: 0, type: 'from', duration: 150, ease: 'linear' },
          ]}
        />
        <TweenOne
          d="M137,135L245,25"
          component="path"
          animation={[
            { opacity: 0, type: 'from', delay: 650, duration: 0 },
            { SVGDraw: 0, type: 'from', duration: 150, ease: 'linear' },
          ]}
        />
        <TweenOne
          d="M245,25L245,190"
          component="path"
          animation={[
            { opacity: 0, type: 'from', delay: 800, duration: 0 },
            { SVGDraw: 0, type: 'from', duration: 200, ease: 'easeOutQuart' },
          ]}
        />
        <TweenOne
          component="circle" r="20" fill="#fff" cx="95" cy="200"
          animation={{
            delay: 900,
            r: 60,
            opacity: 0,
            duration: 300,
            type: 'from',
            attr: 'attr',
            ease: 'easeOutBack',
          }}
        />
      </TweenOne>

      <TweenOne
        animation={this.state.boxAnim}
        className="right-side blur"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={(c) => { this.sideBoxComp = c; }}
      >
        {this.state.children}
      </TweenOne>
    </div>);
  }
}
