<p align="center">
  <a href="http://motion.ant.design">
    <img width="200" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg"/>
  </a>
</p>

<h1 align="center">Ant Motion</h1> 

<div align="center">
  
Animation specification and components of Ant Design.

[![Dependencies](https://img.shields.io/david/ant-design/ant-motion.svg)](https://david-dm.org/ant-design/ant-motion)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-motion.svg)](https://david-dm.org/ant-design/ant-motion?type=dev)

</div>


<div align="center"><a href="./README.cn.md">中文 README</a> | <a href="http://ant-motion.gitee.io/">国内镜像</a></div>

## What is Ant Motion?

Ant Motion is a motion design specification from Ant Design, and also provide a complete solution with lots of out-of-box animations for your React applications.

## What can Ant Motion do?

- Create neat animations by using React components with a simple configuration.
- Create beautiful landing page with motions by a few steps.

## Demos

- [List animations](http://motion.ant.design/exhibition/demo/list-anim)
- [Detailed explanation of the switching effect](http://motion.ant.design/exhibition/demo/detail-switch)
- [Sortable animated drag and drop list](http://motion.ant.design/exhibition/demo/list-sort)
- [Thumbnail expand with details animation](http://motion.ant.design/exhibition/demo/pic-details-anim)
- [View more](http://motion.ant.design/exhibition/)

## Specification

Ant Motion is an abstraction interface mainly intended to enhance the comfortness in the UX, increase the UI vitality, and also describe the level of relationship among touch feedback, user intentions and other functional effects. [View details](http://motion.ant.design/language/basic)

## Animation Components

- [rc-tween-one](http://motion.ant.design/components/tween-one)

   This is a React wrapper to animate your components. You can perform all of the style animations, including transform3d, fuzzy and other effects, you can also complete the Bezier curve animation. For the specific parameters see the [API](http://motion.ant.design/api/tween-one)

- [rc-animate](http://motion.ant.design/components/animate)

   On a single element according to the status of animation display hidden, need to combine css or other third-party animation class used together; for the specific parameters see [API](http://motion.ant.design/api/animate)

- [rc-queue-anim](http://motion.ant.design/components/queue-anim)

   Add a serial rendering approach to a group of elements. Refer to the [API](http://motion.ant.design/api/queue-anim) for the specific parameters.

- [rc-scroll-anim](http://motion.ant.design/components/scroll-anim)

   Through a simple configuration, you can add animations which follow the scollbar on the elements of the page. Refer to the [API](http://motion.ant.design/api/scroll-anim) for the specific parameters.

- [rc-banner-anim](http://motion.ant.design/components/banner-anim)

   With a simple configuration, you can set up a modern and professional banner slider. Refer to the [API](http://motion.ant.design/api/banner-anim) for the specific parameters.

## Landing page solution

Landing Formally launched, [more](https://landing.ant.design). 🎉🎉🎉

This is based on the Ant Motion React components to follow with the design specifications of Ant Design to complete the demo page, you can quickly and flexibly configure the page template you want.

It provides a single-element example and a full-page example after configuration.

[ant-motion-dva-cli-example](https://github.com/ant-motion/ant-motion-dva-cli-example)

[umi-example](https://github.com/ant-motion/landing-umi-example)

[More details](http://t.cn/RIGA89W)

## Develop

```
npm install
npm start
```

Go to http://localhost:8111

