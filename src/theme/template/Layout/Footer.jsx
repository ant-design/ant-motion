import React, { PropTypes } from 'react';

function Footer(props) {
  return (<footer className={props.className}>
    <ul>
      <li>
        <h2 key="h2">GitHub</h2>
        <div key="git">
          <a target="_blank" href="https://github.com/ant-motion/ant-motion">仓库</a>
        </div>
        <div key="0">
          <a target="_blank" href="https://github.com/ant-design/antd-init">antd-init</a> - 脚手架
        </div>
        <div key="1"><a target="_blank" href="http://ant-tool.github.io/">ant-tool</a> - 开发工具</div>
      </li>
      <li>
        <h2 key="h2">相关站点</h2>
        <div key="0"><a target="_blank" href="http://ant.design/">Ant Design</a></div>
        <div key="1"><a target="_blank" href="http://mobile.ant.design">Ant Design Mobile</a> - 移动版</div>
        <div key="2"><a target="_blank" href="https://g2.alipay.com/">G2</a> - 数据可视化</div>
        <div key="3"><a target="_blank" href="https://antv.alipay.com/">AntV</a> - 数据可视化规范</div>
        <div key="4"><a target="_blank" href="http://ux.ant.design">Ant UX</a> - 页面逻辑素材</div>
      </li>
      <li>
        <h2 key="h2">联系我们</h2>
        <div key="0">
          <a target="_blank" href="https://github.com/ant-motion/ant-motion/issues">
            反馈和建议
          </a>
        </div>
      </li>
      <li>
        <p key="0">©2016 蚂蚁金服体验技术部出品</p>
        <div key="1">Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
      </li>
    </ul>
  </footer>);
}
Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: 'footer',
};
export default Footer;
