# Ant Motion 

Animation specification and components of Ant Design.


## 什么是 Ant Motion ？
<p align="center">
  <a href="http://motion.and.design">
    <img width="200" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg"/>
  </a>
</p>

Ant Motion 是 Ant Design 中提炼出来的动效语言。他不仅仅是动效语言，同时也是一套 React 框架动效解决方案，可以帮助开发者，更容易的在项目中使用动效。
我们提供了单项，组合动画，以及整套解决方案。


## Ant Motion 能做什么 ？

通过 React 标签，以简单的配置即可完成想要的动画，可以快速的实现不同组合的动画效果，更好的提高你的工作效率。

## 动效 Demo 
#### [列表的增删间的动画](http://motion.ant.design/exhibition/demo/list-anim);
#### [详细说明的切换动效](http://motion.ant.design/exhibition/demo/detail-switch);
#### [列表交换位置的动效](http://motion.ant.design/exhibition/demo/list-sort);
#### [图片详细缩略间的切换动效](http://motion.ant.design/exhibition/demo/pic-details-anim);
[>> 查看更多](http://motion.ant.design/exhibition/);

## 动效语言
Ant Motion 在界面里主要是来加强体验舒适度、描述层级关系、增加界面活力、反馈与意向等功能性的动效。[详情查看](http://motion.ant.design/language/basic)

## 动效组件
#### [rc-tween-one 单元素动效执行组件](http://motion.ant.design/components/tween-one)
这是个对单个元素标签做动效的组件，可以执行所有样式动画，包括 transform3d，模糊等效果，还可以完成贝塞尔曲线动画，具体参数请参见  [API](http://motion.ant.design/api/tween-one)

#### [rc-animate 样式进出场组件](http://motion.ant.design/components/animate)
对单个元素根据状态进行动画显示隐藏，需结合 css 或其它第三方动画类一起使用；具体参数请参见 [API](http://motion.ant.design/api/animate)

#### [rc-queue-anim 队列进出场组件](http://motion.ant.design/components/queue-anim)
通过简单的配置对一组元素添加串行的进场动画效果。具体参数请参见 [API](http://motion.ant.design/api/queue-anim)

#### [rc-scroll-anim 随滚动执行效果组件](http://motion.ant.design/components/scroll-anim)
通过简单的配置，对页面里的元素添加随滚动条滚动的动画。具体参数请参见  [API](http://motion.ant.design/api/scroll-anim)

####  [rc-banner-anim banner 切换效果组件](http://motion.ant.design/components/banner-anim)
通过简单的配置, 就能让你的 banner 动起来。 具体参数请参见  [API](http://motion.ant.design/api/banner-anim)

## 首页的解决方案

这是以 Ant Motion 的 React 组件遵从 Ant Design 的视觉规范来完成的 demo 页面，可灵活又快速的配置出你想要的首页模板。

主要提供了单元素示例与配置完后的整页示例。

[生成首页在 dva-cli 里运行的例子](https://github.com/ant-motion/ant-motion-dva-cli-example)

[>> 查看详细](http://t.cn/RIGA89W);


## Develop

#### 安装

```
npm install
```
#### 启动：

```
npm start
```

访问  http://127.0.0.1:8111 。

