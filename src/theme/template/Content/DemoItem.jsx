import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Modal from 'antd/lib/modal';


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
      'onClick',
      'onCancel',
      'mouseEnter',
      'mouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
    this.setState({
      offset: this.dom.getBoundingClientRect()
    })
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

  onClick(e) {
    const dom = e.target;
    if (dom.tagName === 'BUTTON' || dom.tagName === 'A' ||
      dom.parentNode.tagName === 'BUTTON' || dom.parentNode.tagName === 'A'
    ) {
      return;
    }
    const open = !this.state.open;
    this.setState({
      open,
      paused: true,
    });
  }

  onCancel() {
    this.setState({
      open: false,
      paused: true
    })
  }


  render() {
    let children = this.props.children;
    if (typeof children === 'object') {
      const childProps = assign({}, this.props.children.props || {});
      if (this.props.mouseEnter) {
        childProps.paused = this.state.paused;
      }
      children = React.cloneElement(this.props.children, childProps);
    }
    let width;
    switch (this.props.col) {
      case 24:
      {
        width = 960;
        break
      }
      default:
      {
        width = 600;
      }
    }

    return (<li
      className={`${this.props.className} ${this.state.open ? 'open' : ''}`.trim()}
      id={this.props.id}
    >
      <div className={`${this.props.className}-demo`}
        onMouseEnter={this.props.mouseEnter ? this.mouseEnter : null}
        onMouseLeave={this.props.mouseEnter ? this.mouseLeave : null}
      >
        {children}
        {!!this.props._style ?
        <style dangerouslySetInnerHTML={{ __html: this.props._style }} /> : null}
      </div>
      <div className={`${this.props.className}-meta`} key="meta" onClick={this.onClick}>
        <h1>{this.props.title}</h1>
        <div className={`${this.props.className}-meta-content`}>{this.props.content}</div>
        <span className={`${this.props.className}-meta-icon ${this.state.open ? 'open' : ''}`}
          onClick={this.iconClick}
        />
      </div>
      <Modal visible={this.state.open} onCancel={this.onCancel} footer={null} width={width}>
        <div id={`${this.props.id}-modal`}>
          <div className={`${this.props.className}-meta`} key="meta">
            <h1>{this.props.title}</h1>
            <div className={`${this.props.className}-meta-content`}>{this.props.content}</div>
          </div>
          <div className={`${this.props.className}-demo`}
            onMouseEnter={this.props.mouseEnter ? this.mouseEnter : null}
            onMouseLeave={this.props.mouseEnter ? this.mouseLeave : null}
          >
            {children}
          </div>
          <div className="code">
            <div className={`${this.props.className}-highlight`}
            >
              {this.props.code}
         <pre>
           {this.props.styleCode ?
           <code className="css" dangerouslySetInnerHTML={{ __html: this.props.styleCode }} />
             : null}
         </pre>
            </div>
          </div>
        </div>
      </Modal>
    </li>);
  }
}

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.any,
  content: PropTypes.any,
  code: PropTypes.object,
  styleCode: PropTypes.string,
  _style: PropTypes.string,
  mouseEnter: PropTypes.bool,
  id: PropTypes.string,
};

Item.defaultProps = {
  className: 'code-box',
};
export default Item;
