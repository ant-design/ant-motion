import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Timeline extends React.Component {

  constructor() {
    super(...arguments);
    this.moment = null;
    this.state = {
      moment: null,
    };
    [
      'onChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(e) {
    if (e.mode === 'onComplete' && e.index === 6) {
      setTimeout(() => {
        this.setState({
          moment: 0,
        });
      }, 0);
    } else {
      this.setState({
        moment: null,
      });
    }
  }

  render() {
    return (
      <TweenOne
        animation={[
          { left: '-40%' },
          { left: '40%' },
          { top: '30px' },
          { scale: 0.7 },
          { scale: 1 },
          { top: 0 },
          { left: '0%' },
        ]}
        paused={this.props.paused}
        onChange={this.onChange}
        moment={this.state.moment}
        style={{ transform: 'scale(1)', position: 'relative' }}
        className="code-box-shape"
      />
    );
  }
}
Timeline.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

const mdString = `import TweenOne from 'rc-tween-one'

ReactDOM.render(<TweenOne
  animation={[
    { left: '-40%' },
    { left: '40%' },
    { top: '30px' },
    { scale: 0.7 },
    { scale: 1 },
    { top: 0 },
    { left: '0%' },
  ]}
  style={{ transform: 'scale(1)', position: 'relative' }}
/>, mountNode)`;
export default {
  Comp: Timeline,
  mdString,
};
