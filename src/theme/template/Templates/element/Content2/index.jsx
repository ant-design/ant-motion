import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Content extends React.Component {

  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content2',
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title: '蚂蚁金融云提供专业的服务',
        content: '基于阿里云强大的基础资源',
      },
      block0: {
        iconImg: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title: '企业资源管理',
        content: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
      block1: {
        iconImg: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title: '云安全',
        content: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
      },
      block2: {
        iconImg: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title: '云监控',
        content: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
      },
      block3: {
        iconImg: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title: '移动',
        content: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
      },
      block4: {
        iconImg: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title: '分布式中间件',
        content: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
      },
      block5: {
        iconImg: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        title: '大数据',
        content: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
      },
    },
  };

  getDelay = (e) => {
    return e.index % 3 * 100 + Math.floor(e.index / 3) * 100 + 200;
  };

  render() {
    const props = { ...this.props };
    const { title, content } = props.dataSource.title;
    const children = Object.keys(props.dataSource).filter(key => key.match('block'))
      .map((key, i) => {
        const item = props.dataSource[key];
        return (<li
          key={i}
          style={{ left: `${i%3 * 33.33}%`, top: `${Math.floor(i / 3) * 200}px`}}
        >
          <TweenOne
            animation={{x: '-=10', opacity: 0, type: 'from'}}
            className="img" key="img"
          >
            <img src={item.iconImg} width="100%" />
          </TweenOne>
          <QueueAnim delay={100} leaveReverse key="text" className="text">
            <h1 key="h1">{item.title}</h1>
            <p key="p">{item.content}</p>
          </QueueAnim>
        </li>)
      });
    delete props.dataSource;
    delete props.name;
    const titleAnim = { y: '+=30', opacity: 0, type: 'from' };
    return (
      <div {...props} className={`${props.className}-wrapper`}>
        <OverPack
          scrollName={this.props.name}
          className={props.className}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
        >
          <TweenOne key="h1" animation={titleAnim} component="h1">
            {title}
          </TweenOne>
          <TweenOne key="p" animation={titleAnim} component="p">
            {content}
          </TweenOne>
          <QueueAnim
            key="ul"
            component="ul"
            leaveReverse
            type="bottom"
            interval={0}
            delay={this.getDelay}
          >
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
