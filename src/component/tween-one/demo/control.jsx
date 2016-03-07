import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';

class Control extends React.Component {

  constructor() {
    super(...arguments);
    this.moment = null;
    this.state = {
      moment: null,
      paused: true,
      reverse: false,
    };
    [
      'onClick',
      'onPause',
      'onReverse',
      'onRestart',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onPause() {
    this.setState({
      paused: true,
      moment: null,
    });
  }

  onReverse() {
    this.setState({
      paused: false,
      reverse: true,
      moment: null,
    });
  }

  onRestart() {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }

  onClick() {
    this.setState({
      paused: false,
      reverse: false,
      moment: null,
    });
  }


  render() {
    return (
      <div>
        <TweenOne
          animation={{ x: 200, duration: 2000 }}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          className="code-box-shape"
          style={{ margin: '25px 0' }}
        />
        <div className="demo-buttons">
          <Button type="primary" onClick={this.onClick}>play</Button>
          <Button type="primary" onClick={this.onPause}>pause</Button>
          <Button type="primary" onClick={this.onReverse}>reverse</Button>
          <Button type="primary" onClick={this.onRestart}>restart</Button>
        </div>
      </div>
    );
  }
}
Control.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

const mdString = `import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';

class Control extends React.Component {

  constructor() {
    super(...arguments);
    this.moment = null;
    this.state = {
      moment: null,
      paused: true,
      reverse: false,
    };
    [
      'onClick',
      'onPause',
      'onReverse',
      'onRestart',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onPause() {
    this.setState({
      paused: true,
      moment: null,
    });
  }

  onReverse() {
    this.setState({
      paused: false,
      reverse: true,
      moment: null,
    });
  }

  onRestart() {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }

  onClick() {
    this.setState({
      paused: false,
      reverse: false,
      moment: null,
    });
  }


  render() {
    return (
      <div>
        <TweenOne
          animation={{ x: 200, duration: 2000 }}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          className="code-box-shape"
          style={{ margin: '25px 0' }}
        />
        <div className="demo-buttons">
          <Button type="primary" onClick={this.onClick}>play</Button>
          <Button type="primary" onClick={this.onPause}>pause</Button>
          <Button type="primary" onClick={this.onReverse}>reverse</Button>
          <Button type="primary" onClick={this.onRestart}>restart</Button>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Control />, mountNode)`;
export default {
  Comp: Control,
  mdString,
};
