export default {
  borderWidth: {
    value: '0px',
    name: '描边线宽',
    length: 4,
    remark: '参数： 上，右，下，左',
  },
  borderStyle: {
    value: 'none',
    name: '描边样式',
    select: [
      { name: '无边框', value: 'none' },
      { name: '实线', value: 'solid' },
      { name: '虚线', value: 'dashed' },
      { name: '点状边框', value: 'dotted' },
      { name: '双线', value: 'double' },
    ],
  },
  borderColor: {
    value: '#666',
    name: '描边颜色',
  },
};
