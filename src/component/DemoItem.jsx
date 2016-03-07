import React, { PropTypes } from 'react';
import assign from 'object-assign';
import Highlight from './Highlight';
import TweenOne from 'rc-tween-one';
import './demolayout.less';

class Item extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      paused: true,
      highlightAnim: null,
      highlightStyle: {},
      highlightBoxStyle: {},
      open: false,
    };
    [
      'iconClick',
      'mouseEnter',
      'mouseLeave',
      'onMount',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    this.onMount();
  }

  onMount() {
    this.highlightDOM = this.refs.highlight;
    this.height = this.highlightDOM.getBoundingClientRect().height;
    this.setState({
      highlightBoxStyle: { display: 'none' },
      highlightStyle: { marginTop: -this.height },
    });
  }

  mouseEnter() {
    this.setState({
      paused: false,
    });
  }

  mouseLeave() {
    this.setState({
      paused: true,
    });
  }

  iconClick() {
    if (!this.state.open) {
      this.setState({
        highlightBoxStyle: null,
        highlightAnim: { marginTop: 0 },
        open: true,
      });
    } else {
      this.setState({
        highlightAnim: {
          marginTop: -this.height, onComplete: () => {
            this.setState({
              highlightBoxStyle: { display: 'none' },
            });
          },
        },
        open: false,
      });
    }
  }

  render() {
    let children = this.props.children;
    if (typeof children === 'object') {
      const childProps = assign({}, this.props.children.props || {});
      childProps.paused = this.state.paused;
      children = React.cloneElement(this.props.children, childProps);
    }
    return (<li {...this.props}>
      <div className={`${this.props.className}-demo`}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {children}
      </div>
      <div className={`${this.props.className}-meta`}>
        <h1>{this.props.title}</h1>
        <div className={`${this.props.className}-meta-content`}>{this.props.content}</div>
        <span className={`${this.props.className}-meta-icon ${this.state.open ? 'open' : ''}`}
          onClick={this.iconClick}
        />
      </div>
      <div className={`${this.props.className}-highlight`}
        ref="highlight"
        style={this.state.highlightBoxStyle}
      >
        <TweenOne animation={this.state.highlightAnim} style={this.state.highlightStyle}>
          <Highlight>
            {this.props.code}
          </Highlight>
        </TweenOne>
      </div>
    </li>);
  }
}

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.any,
  content: PropTypes.any,
  code: PropTypes.string,
};

Item.defaultProps = {
  className: 'code-box',
};
export default Item;
