const React  = require("react");
const ReactDOM = require("react-dom");
module.exports = {
  'src/components/animate/index.md': [
    require('../../src/components/animate/demo/appear.md'),
    require('../../src/components/animate/demo/remove.md'),
    require('../../src/components/animate/demo/simple.md'),
  ],
  'src/components/banner-anim/index.md': [
    require('../../src/components/banner-anim/demo/autoplay.md'),
    require('../../src/components/banner-anim/demo/bgParallax.md'),
    require('../../src/components/banner-anim/demo/customArrowThumb.md'),
    require('../../src/components/banner-anim/demo/followMouse.md'),
    require('../../src/components/banner-anim/demo/simple.md'),
    require('../../src/components/banner-anim/demo/video.md'),
  ],
  'src/components/queue-anim/index.md': [
    require('../../src/components/queue-anim/demo/basic.md'),
    require('../../src/components/queue-anim/demo/change.md'),
    require('../../src/components/queue-anim/demo/custom.md'),
    require('../../src/components/queue-anim/demo/enter-leave.md'),
    require('../../src/components/queue-anim/demo/page.md'),
    require('../../src/components/queue-anim/demo/simple.md'),
  ],
  'src/components/scroll-anim/index.md': [
    require('../../src/components/scroll-anim/demo/overPack.md'),
    require('../../src/components/scroll-anim/demo/parallax-custom.md'),
    require('../../src/components/scroll-anim/demo/parallax-timeline.md'),
    require('../../src/components/scroll-anim/demo/parallax.md'),
  ],
  'src/components/tween-one/index.md': [
    require('../../src/components/tween-one/demo/bezier.md'),
    require('../../src/components/tween-one/demo/blur.md'),
    require('../../src/components/tween-one/demo/control.md'),
    require('../../src/components/tween-one/demo/position.md'),
    require('../../src/components/tween-one/demo/rotate.md'),
    require('../../src/components/tween-one/demo/scale.md'),
    require('../../src/components/tween-one/demo/timeline.md'),
  ],
};
Object.keys(module.exports).map((key) => module.exports[key])
  .forEach((demos) => {
    demos.forEach((demo) => {
      if (typeof demo.preview !== "function") return;
      demo.preview = demo.preview(React, ReactDOM);
    });
  });