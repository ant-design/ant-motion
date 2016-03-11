import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Footer extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (<TweenOne component="footer" className={this.props.className}
      animation={{ type: 'from', y: '+=30', opacity: 0, duration: 800 }}
    >
      <ul>
        <li>
          <h2>GitHub</h2>
          <a target="_blank" href="https://github.com/ant-motion/ant-motion">仓库</a>
        </li>
        <li>
          <h2>关于我们</h2>
          <a target="_blank" href="https://github.com/ant-ued/blog" style={{ float: 'left' }}>
            博客 - Ant UED
          </a>
          <a target="_blank" href="http://ant.design/" style={{ float: 'left', clear: 'both' }}>
            Ant Design
          </a>
        </li>
        <li>
          <h2>联系我们</h2>
          <a target="_blank" href="https://github.com/ant-motion/ant-motion/issues">
            反馈和建议
          </a>
        </li>
        <li>
          <h2>©2016 蚂蚁金服体验技术部出品</h2>
        </li>
      </ul>
    </TweenOne>);
  }
}
Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: 'footer',
};
export default Footer;
