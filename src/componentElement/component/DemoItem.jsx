import React, { PropTypes } from 'react';
import assign from 'object-assign';
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
    this.highlightDOM.style.display = 'none';
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
        highlightBoxStyle: { display: 'inherit' },
        highlightStyle: { marginTop: -this.height },
        highlightAnim: { marginTop: 0 },
        open: true,
      });
    } else {
      this.setState({
        highlightAnim: {
          highlightStyle: { marginTop: 0 },
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
    return (<li className={this.props.className} id={this.props.id}>
      <div className={`${this.props.className}-demo`}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {children}
        {!!this.props._style ?
        <style dangerouslySetInnerHTML={{ __html: this.props._style }} /> : null}
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
          <pre>
            <code className="js" dangerouslySetInnerHTML={{ __html: this.props.code }} />
            {this.props.styleCode ?
            <code className="css" dangerouslySetInnerHTML={{ __html: this.props.styleCode }} />
              : null}
          </pre>
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
  styleCode: PropTypes.string,
  _style: PropTypes.string,
  id: PropTypes.string,
};

Item.defaultProps = {
  className: 'code-box',
};
export default Item;
