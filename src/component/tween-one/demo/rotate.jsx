import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Rotate extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ r: 360, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        className="code-box-shape"
      />
    );
  }
}
Rotate.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

const mdString = `import TweenOne from 'rc-tween-one'

ReactDOM.render(<TweenOne
  animation={{ rotate: 360, repeat: -1, duration: 1000 }}
/>, mountNode)`;
const title = '旋转效果';
const content = '鼠标经过可查看旋转效果';

export default {
  Comp: Rotate,
  mdString,
  title,
  content,
};
