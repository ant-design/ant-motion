import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Scale extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ scale: 0, yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        style={{ transform: 'scale(1)' }}
        className="code-box-shape"
      />
    );
  }
}
Scale.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

const mdString = `import TweenOne from 'rc-tween-one'

ReactDOM.render(<TweenOne
  animation={{ scale: '0', yoyo: true, repeat: -1, duration: 1000 }}
  style={{ transform: 'scale(1)' }}
/>, mountNode)`;
export default {
  Comp: Scale,
  mdString,
};
