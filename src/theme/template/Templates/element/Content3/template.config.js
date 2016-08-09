const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/ndmJrWwkQloTtKg.jpg',
  component,
  templateStr,
  less,
  text: '用于需要video来更好的阐述功能如何使用时',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '100%',
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'block1',
      name: '内容区域',
      value: {
        video: {
          name: '视频',
          value: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
        },
        title: {
          name: '标题',
          value: '蚂蚁金融云提供专业的服务',
        },
        content: {
          name: '说明',
          value: '科技想象力，金融创造力',
        },
      },
    },
  ],
};
