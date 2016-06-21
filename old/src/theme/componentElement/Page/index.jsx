import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import './list.less';
import './markdown.less';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
const listNav = require('../list');
import raf from 'raf';
import easingTypes from 'tween-functions';

function currentScrollTop() {
  const supportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
  const isCSS1ScrollTop = isCSS1Compat ?
    document.documentElement.scrollTop : document.body.scrollTop;
  return supportPageOffset ? window.pageYOffset : isCSS1ScrollTop;
}

class Page extends React.Component {
  constructor() {
    super(...arguments);
    this.ulOpen = {};
    const list = listNav[this.props._keys] || [];
    this.navHeight = 40;
    this.rafID = -1;
    this.state = {
      list,
      ulTween: this.getTweenData(this.props, list),
      minHeight: 800,
    };
    this.oneEnter = false;
    [
      'liClick',
      'listElement',
      'judgeChildActive',
      'onWindowResized',
      'scrollTo',
      'frame',
      'cancelRequestAnimationFrame',
    ].forEach((method) => this[method] = this[method].bind(this));
  }


  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
    this.onWindowResized();
  }

  componentWillReceiveProps(nextProps) {
    // 不用 ref, 直接算, list 高度为40, 取个数;
    if (nextProps._keys !== this.props._keys) {
      const list = listNav[nextProps._keys] || [];
      const ulTween = this.getTweenData(nextProps, list);
      this.setState({ list, ulTween });
    }
  }

  componentDidUpdate() {
    if (!this.oneEnter) {
      clearTimeout(this.tweenTimeout);
      this.tweenTimeout = setTimeout(this.scrollTo, 350);
    } else {
      this.scrollTo();
    }
    this.oneEnter = true;
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
  }

  onWindowResized() {
    this.clientHeight = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    this.setState({
      minHeight: this.clientHeight - 112,
    });
  }

  getTweenData(props, list) {
    const ulTween = {};// this.state.ulTween;
    list.forEach((item, i) => {
      if (item.children) {
        // 判断当前页面是不是子级; 如果是子级 open 强制设为 true;
        const childActive = this.judgeChildActive(item.children);
        this.ulOpen[props._keys + i] = childActive || item.open;
        if (!this.ulOpen[props._keys + i]) {
          ulTween[props._keys + i] = {
            marginTop: -item.children.length * this.navHeight,
          };
        }
      }
    });
    return ulTween;
  }

  frame() {
    if (this.rafID === -1) {
      return;
    }
    let toTop = 0;
    if (this.props.query) {
      const element = document.querySelector(`#${this.props.query}`);
      if (element) {
        toTop = element.getBoundingClientRect().top;
        const docTop = document.documentElement.getBoundingClientRect().top;
        toTop = Math.round(toTop) - Math.round(docTop);
      } else {
        this.cancelRequestAnimationFrame();
        return;
      }
    } else {
      this.cancelRequestAnimationFrame();
      return;
    }
    const duration = 450;
    const now = Date.now();
    const progressTime = now - this.initTime > duration ? duration : now - this.initTime;
    const easeValue = easingTypes.easeInOutCubic(progressTime, this.scrollTop, toTop, duration);
    window.scrollTo(window.scrollX, easeValue);
    if (progressTime === duration) {
      this.cancelRequestAnimationFrame();
    } else {
      raf(this.frame);
    }
  }

  scrollTo() {
    this.scrollTop = currentScrollTop();
    this.initTime = Date.now();
    this.rafID = raf(this.frame);
  }

  cancelRequestAnimationFrame() {
    raf.cancel(this.rafID);
    this.rafID = -1;
  }

  judgeChildActive(child) {
    const href = this.props.href.split('/');
    let active = false;
    child.forEach(item => {
      if (href.indexOf(item.href) >= 0) {
        active = true;
      }
    });
    return active;
  }

  liClick(i, length) {
    const ulTween = this.state.ulTween;
    if (this.ulOpen[i]) {
      ulTween[i] = {
        marginTop: -length * this.navHeight,
      };

      delete this.ulOpen[i];
    } else {
      ulTween[i] = {
        marginTop: 0,
      };
      this.ulOpen[i] = true;
    }
    this.setState({
      ulTween,
    });
  }

  listElement(item, i) {
    let className = '';
    if (item.children) {
      // 返回二级菜单
      const child = item.children.map(this.listElement);
      const open = this.ulOpen[this.props._keys + i] ? 'open' : '';
      if (!this.ulOpen[this.props._keys + i] && this.judgeChildActive(item.children)) {
        className = 'active';
      }
      const liClick = this.liClick.bind(this, this.props._keys + i, item.children.length);
      return (<li key={`${this.props._keys}.${item.title}`}
        className={className} disabled={item.disabled}
      >
        <h4
          onClick={liClick}
          className={open}
        >
          {item.title}
          <i>{item.desc}</i>
        </h4>
        <TweenOne animation={this.state.ulTween[this.props._keys + i]}>
          <ul>
            {child}
          </ul>
        </TweenOne>
      </li>);
    }
    const contentName = this.props.params.contentName;
    const _href = item.href.replace(/[/]/g, '') || item.title;
    className = '';
    if (contentName === _href || _href === item.title && !contentName) {
      className = 'active';
    }
    return (<li key={`${this.props._keys}.${_href}`}
      className={className} disabled={item.disabled}
    >
      <Link to={`/${this.props._keys}/${item.href}`}>
        {item.title}
        <i>{item.desc}</i>
      </Link>
    </li>);
  }

  render() {
    const list = this.state.list.map(this.listElement);
    return (<div className={this.props.className}>
      <div className={`${this.props.className}-wrapper`}>
        <aside>
          <QueueAnim type={['bottom', 'top']} duration={450} ease="easeInOutQuad">
            <QueueAnim key={this.props._keys} component="ul" type="bottom">{list}</QueueAnim>
          </QueueAnim>
        </aside>
        <section style={{ minHeight: this.state.minHeight }}>
          <QueueAnim type={['right', 'left']} duration={450} ease="easeInOutQuad"
            className={`${this.props.className}-content`}
          >
            <div key={this.props.href}>{this.props.children}</div>
          </QueueAnim>
        </section>
      </div>
    </div>);
  }
}
Page.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  href: PropTypes.string,
  _keys: PropTypes.string,
  query: PropTypes.string,
  content: PropTypes.object,
  children: PropTypes.any,
  params: PropTypes.object,
};

Page.defaultProps = {
  className: 'page',
  language: '',
};
export default Page;
