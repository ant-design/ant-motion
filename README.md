<p align="center">
  <a href="http://motion.and.design">
    <img width="200" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg"/>
  </a>
</p>

# Ant Motion [![node version][node-image]][node-url]
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

The react animation solution.

[中文 README](https://github.com/ant-design/ant-motion/blob/master/README.cn.md)

## What is Ant Motion?

Ant Motion is a motion design specification from Ant Design, and also a set of solutions that can provide a complete solution with lots of out-of-box animations for their your applications.

## What can Ant Motion do?

You can quickly achieve different animations set using the React JSX syntax with a simple configuration to complete the desired animation.

## Animated demos
#### [List animations](http://motion.ant.design/exhibition/demo/list-anim);
#### [Detailed explanation of the switching effect](http://motion.ant.design/exhibition/demo/detail-switch);
#### [Sortable animated drag and drop list](http://motion.ant.design/exhibition/demo/list-sort);
#### [Thumbnail expand with details animation](http://motion.ant.design/exhibition/demo/pic-details-anim);
[>> View more](http://motion.ant.design/exhibition/);

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

This is based on the Ant Motion React components to follow with the design specifications of Ant Design to complete the demo page, you can quickly and flexibly configure the page template you want.

It provides a single-element example and a full-page example after configuration.

[ant-motion-dva-cli-example](https://github.com/ant-motion/ant-motion-dva-cli-example

[More details](http://t.cn/RIGA89W)

## Develop

```
npm install
npm start
```

Go to http://localhost:8111

