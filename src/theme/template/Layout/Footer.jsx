import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

function Footer(props) {
  return (<footer className={props.className}>
    <ul>
      <li>
        <h2><Icon type="github" /> GitHub</h2>
        <div>
          <a target="_blank" href="https://github.com/ant-motion/ant-motion">仓库</a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/ant-motion/ant-motion-dva-cli-example">
            example
          </a> - 模板例子
        </div>
      </li>
      <li>
        <h2><Icon type="link" /> 相关站点</h2>
        <div><a target="_blank" href="http://ant.design/">Ant Design</a></div>
        <div><a target="_blank" href="http://mobile.ant.design">Ant Design Mobile</a> - 移动版</div>
        <div>
          <a target="_blank" href="https://github.com/dvajs/dva">dva</a> - 应用框架
        </div>
        <div>
          <a target="_blank" href="https://github.com/dvajs/dva-cli">dva-cli</a> - 脚手架
        </div>
        <div><a target="_blank" href="https://antv.alipay.com/">G2 AntV</a> - 数据可视化</div>
        <div><a target="_blank" href="http://antdlibrary.alipay.net/">AntD Library</a> - Axure 部件库</div>
        <div><a target="_blank" href="http://ux.ant.design">Ant UX</a> - 页面逻辑素材</div>
      </li>
      <li>
        <h2><Icon type="customer-service" /> 联系我们</h2>
        <div key="0">
          <a target="_blank" href="https://github.com/ant-motion/ant-motion/issues">
            反馈和建议
          </a>
        </div>
      </li>
      <li>
        <h2>Copyright © {new Date().getFullYear()}</h2>
        <div>
          蚂蚁金服体验技术部出品 @ AFX
        </div>
        <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
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
