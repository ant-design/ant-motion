const fs = require('fs');
const path = require('path');
const JsonML = require('jsonml.js/lib/utils');
const pkgPath = path.join(process.cwd(), 'package.json');
const pkgName = require(pkgPath).name;
const nunjucks = require('nunjucks');
nunjucks.configure({ autoescape: false });

const babel = require('babel-core');

function isStyleTag(node) {
  return node && JsonML.getTagName(node) === 'style';
}

function getCode(node) {
  return JsonML.getChildren(
    JsonML.getChildren(node)[0]
  )[0];
}

module.exports = (markdownData) => {
  const meta = markdownData.meta;
  meta.id = meta.filename.replace(/\.md$/, '').replace(/\//g, '-');
  const contentChildren = JsonML.getChildren(markdownData.content);
  const chineseIntroStart = contentChildren.findIndex((node) => {
    return JsonML.getTagName(node) === 'h2' &&
      JsonML.getChildren(node)[0] === 'zh-CN';
  });
  const englishIntroStart = contentChildren.findIndex((node) => {
    return JsonML.getTagName(node) === 'h2' &&
      JsonML.getChildren(node)[0] === 'en-US';
  });
  const codeIndex = contentChildren.findIndex((node) => {
    return JsonML.getTagName(node) === 'pre' &&
      JsonML.getAttributes(node).lang === 'jsx';
  });
  if (chineseIntroStart > -1 /* equal to englishIntroStart > -1 */) {
    markdownData.content = {
      'zh-CN': contentChildren.slice(chineseIntroStart + 1, englishIntroStart),
      'en-US': contentChildren.slice(englishIntroStart + 1, codeIndex),
    };
  } else {
    markdownData.content = contentChildren.slice(0, codeIndex);
  }

  markdownData.highlightedCode = contentChildren[codeIndex].slice(0, 2);
  const preview = [
    'pre', { lang: '__react' },
  ];
  const componentsPath = path.join(process.cwd(), 'components');
  preview.push([
    'code',
    getCode(contentChildren[codeIndex])
      .replace(`${pkgName}/lib`, componentsPath),
  ]);
  markdownData.preview = preview;

  const styleNode = contentChildren.filter((node) => {
    return isStyleTag(node) ||
      (JsonML.getTagName(node) === 'pre' && JsonML.getAttributes(node).lang === 'css');
  })[0];

  if (isStyleTag(styleNode)) {
    markdownData.style = JsonML.getChildren(styleNode)[0];
  } else if (styleNode) {
    const styleTag = contentChildren.filter(isStyleTag)[0];
    markdownData.style = getCode(styleNode) + (styleTag ? JsonML.getChildren(styleTag)[0] : '');
    markdownData.highlightedStyle = JsonML.getAttributes(styleNode).highlighted;
  }

  return markdownData;
};
