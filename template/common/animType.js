/**
 * Created by jljsj on 16/3/29.
 */

export default {
  leftPosition: {
    name: '从左往右',
    one: {
      type: 'left',
      animation: { x: -30, opacity: 0 },
    }
  },
  rightPosition: {
    name: '从右往左',
    one: {
      type: 'right',
      animation: { x: 30, opacity: 0 },
    }
  },
  topPosition: {
    name: '从上往下',
    one: {
      type: 'top',
      animation: { y: -30, opacity: 0 },
    }
  },
  bottomPosition: {
    name: '从下往上',
    one: {
      type: 'bottom',
      animation: { y: 30, opacity: 0 },
    },
  },
  leftRightPoly: {
    name: '左右聚集',
    one: {
      type: 'left',
      animation: { x: -30, opacity: 0 },
    },
    tow: {
      type: 'right',
      animation: { x: 30, opacity: 0 },
    },
  },
  topBottomPoly: {
    name: '上下聚集',
    one: {
      type: 'top',
      animation: { y: -30, opacity: 0 },
    },
    tow: {
      type: 'bottom',
      animation: { y: 30, opacity: 0 },
    },
  },
  scale: {
    name: '从小到大',
    one: {
      type: 'scale',
      animation: { scale: 0, opacity: 0 },
    }
  },
  scaleBig: {
    name: '从大到小',
    one: {
      type: 'scaleBig',
      animation: { scale: 2, opacity: 0 },
    }
  },
  alpha: {
    name: '淡入淡出',
    one: {
      type: 'alpha',
      animation: { opacity: 0 },
    }
  }
}
