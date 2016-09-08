---
order: 0
chinese: 关于解决方案
english: About
---

这是以 Ant Motion 的 React 组件遵从 Ant Design 的视觉规范来完成的 demo 页面，可灵活又快速的配置出你想要的首页模板。

这里主要提供了单元素示例与配置完后的整页示例。

**主要解决视觉设计师前期制作页面后，把需要的动效加在自已的页面加上，能够与程序员很好的沟通。**

### 单元素示例分为：

- 导航的样式选择
- banner的样式选择
- 详细内容说明的样式选择
- 页尾的样式

> 如本页提供的页面不符合你的需求，可按照你的需求查找到相似的布局再作修改。[单元素代码地址](https://github.com/ant-motion/ant-motion/tree/master/src/theme/template/Templates/element)

## 何时使用

- 在我们 ant design 做完后台页面后，需要整理个首页，又想快速的搭建完页面，而且在页面里有可观的动画时。
- 在画白板阶段，需要配置页面的动画效果时。

## 如何使用

1. 选择好你需要的模板，然后编辑内容，再生成链接:

<br />

```__react
import { Steps } from 'antd';
const Step = Steps.Step;
const steps = [
  {
    title: '布局选择',
    description: '选择好你想要的布局',
    status: 'process',
  },
  {
    title: '调整布局',
    description: '在弹框里托动版本来调整布局',
    status: 'process',
  },
  {
    title: '生成模版',
    description: '确定后跳到模板页面',
    status: 'process',
  },
  {
    title: '调整样式',
    description: '双击需要编辑的区域编辑内容',
    status: 'process',
  },
  {
    title: '生成页面',
    description: '编辑完成后点击下方导航里的生成页面',
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
.ant-steps {
  max-width: 900px;
}
</style>
