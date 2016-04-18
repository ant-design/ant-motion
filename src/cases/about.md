# About

- order: 0
- chinese: 关于实践
- index: true

---
这是以 Ant Motion 的 React 组件遵从 Ant Design 的视觉规范来完成的 demo 页面，可灵活又快速的配置出你想要的首页模板。

这里主要提供了单元素示例与配置完后的整页示例。

### 单元素示例分为：
- 导航的样式选择
- banner的样式选择
- 详细内容说明的样式选择
- 页尾的样式

## 何时使用

- 在我们 ant design 做完后台页面后，需要整理个首页，又想快速的搭建完页面，而且在页面里有可观的动画时。
- 在画白板阶段，需要配置页面的动画效果时。

## 如何使用

1. 如果在页面示例里的模板适合你的需求:

<br />

```__react
import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

const steps = [
  {
    title: '布局选择',
    description: '选择好你想要的布局',
    status: 'process',
  },
  {
    title: '编辑区块',
    description: '进入页面后双击你想要编辑的区块',
    status: 'process',
  },
  {
    title: '调试样式',
    description: '在工具栏上调试好你的动画样式',
    status: 'process',
  },
  {
    title: '生成页面',
    status: 'process',
  },
  {
    title: '拷贝链接',
    status: 'process',
  },
  {
    title: '完成',
    status: 'process',
  },
].map((s, i) => <Step key={i} status={s.status} title={s.title} description={s.description}/>);

ReactDOM.render(<Steps current={1}>{steps}</Steps>, mountNode);
```
<style>
.ant-steps{
  max-width: 900px;
}
</style>
<br />

或请查看视频教程。

2. 如果在页面示例里的模板不适合你的需求，你可以选择自已想要的区块来拼接成一个页面（功能待开发。。。）。
