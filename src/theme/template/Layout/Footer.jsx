import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Motion</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-motion">
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">example</a>
                <span> - </span>
                模板例子
              </div>
              <div>
                <a href="http://ant-motion.gitee.io/" target="_blank ">
                  <span>国内镜像站点 🇨🇳</span>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>相关站点</h2>
              <div>
                <a href="http://ant.design">Ant Design</a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://mobile.ant.design/index-cn">Ant Design Mobile</a>
                <span> - </span>
                移动端
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a>
                <span> - </span>
                应用框架
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli</a>
                <span> - </span>
                脚手架
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">AntD Library</a>
                <span> - </span>
                Axure 部件库
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                <span> - </span>
                页面逻辑素材
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>联系我们</h2>
              <div>
                <a href="https://github.com/ant-design/ant-motion/issues">
                  反馈和建议
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                <span> - </span>
                数据可视化
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                企业级 Node 开发框架
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col md={4} sm={24} />
        <Col md={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
