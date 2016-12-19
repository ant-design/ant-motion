export function textStyleData(_data) {
  const data = _data || {};
  const d = {
    fontSize: {
      value: data.size || '12px',
      name: '文字大小'
    },
    color: {
      value: data.color || '#666',
      name: '文字颜色',
    },
    lineHeight: {
      value: data.lineHeight || '1.5em',
      name: '文字行高',
    }
  };
  if (data.align) {
    d.textAlign = {
      value: data.align,
      name: '文字位置',
      select: ['center', 'left', 'right'],
    }
  }
  return d;
}

export function borderStyleData(_data) {
  const data = _data || {};
  return {
    borderWidth: {
      value: data.width || '0px',
      name: '描边线宽',
      length: 4,
      remark: '参数： 上，右，下，左',
    },
    borderStyle: {
      value: data.style || 'none',
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
      value: data.color || '#666',
      name: '描边颜色',
    },
  };
}

export function bgStyleData(_data) {
  const data = _data || {};
  return {
    backgroundColor: {
      value: data.color || '#fff',
      name: '背景颜色',
    },
    backgroundImage: {
      name: '背景图片',
      value: data.image || '',
      remark: data.imageRemark || '尺寸参考:1920*1080',
    },
    backgroundSize: {
      value: data.size || 'cover',
      name: '背景大小',
      select: ['contain', 'cover', 'inherit'],
      remark: 'css 里的参数，"contain", "cover"等参数',
    },
    backgroundPosition: {
      value: data.position || 'center',
      name: '背景对齐',
      select: ['center', 'top', 'left', 'bottom', 'right',
        'left top', 'left bottom', 'right top', 'right bottom'],
      remark: '参数有: left right center bottom top; 如需配置两个，请以空格格开',
    },
    backgroundBlendMode: {
      value: data.blendMode || 'normal',
      name: '背景滤境',
      select: [
        { name: '正常', value: 'normal' },
        { name: '正片叠底', value: 'multiply' },
        { name: '滤色', value: 'screen' },
        { name: '叠加', value: 'overlay' },
        { name: '变暗', value: 'darken' },
        { name: '变亮', value: 'lighten' },
        { name: '颜色减淡', value: 'color-dodge' },
        { name: '颜色加深', value: 'color-burn' },
        { name: '强光', value: 'hard-light' },
        { name: '柔光', value: 'soft-light' },
        { name: '差值', value: 'difference' },
        { name: '排除', value: 'exclusion' },
        { name: '色相', value: 'hue' },
        { name: '饱和度', value: 'saturation' },
        { name: '颜色', value: 'color' },
        { name: '亮度', value: 'luminosity' },
      ],
      remark: '与psd里的滤镜一样, 在图片和颜色做滤境效果;',
    },
    backgroundAttachment: {
      value: data.attachment || 'scroll',
      name: '背景固定',
      select: ['scroll', 'fixed'],
      remark: '参数为： "relative", "absolute", "fixed"; "fixed" 为背景随滚动条滚动',
    },
  };
}
