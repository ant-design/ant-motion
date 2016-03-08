import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Position extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        style={{ left: '-20%' }}
        className="code-box-shape"
      />
    );
  }
}
Position.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

const mdString = `import TweenOne from 'rc-tween-one'

ReactDOM.render(<TweenOne
  animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
  style={{ left: '-20%' }}
/>, mountNode)`;
const title = '位移效果';
const content = '鼠标经过可查看位移效果';

export default {
  Comp: Position,
  mdString,
  title,
  content,
};
