const React = require('react');
const Link = require('react-router').Link;
const toReactComponent = require('jsonml-to-react-component');
const JsonML = require('jsonml.js/lib/utils');
const VideoPlayer = require('./VideoPlayer');
const AutoResponsiveDemo = require('./../../theme/template/Splicing/SplicingAutoResponsive');

function isHeading(node) {
  return /h[1-6]/i.test(JsonML.getTagName(node));
}

module.exports = () => {
  return {
    converters: [
      [(node) => JsonML.isElement(node) && isHeading(node), (node, index) => {
        const children = JsonML.getChildren(node);
        return React.createElement(JsonML.getTagName(node), {
          key: index,
          id: children,
          ...JsonML.getAttributes(node),
        }, [
          <span key="title">{children.map((child) => toReactComponent(child))}</span>,
          <a href={`#${children}`} className="anchor" key="anchor">#</a>,
        ]);
      }],
      [(node) => JsonML.isElement(node) && JsonML.getTagName(node) === 'video', (node, index) =>
        <VideoPlayer video={JsonML.getAttributes(node)} key={index} />
      ],
      [(node) => JsonML.isElement(node) && JsonML.getTagName(node) === 'autoresponsive', (node, index) => {
        console.log(node)
        return <AutoResponsiveDemo key={index}/>
      }],
      [(node) => JsonML.isElement(node) && JsonML.getTagName(node) === 'a' && !(
        JsonML.getAttributes(node).class ||
        (JsonML.getAttributes(node).href &&
        JsonML.getAttributes(node).href.indexOf('http') === 0) ||
        /^#/.test(JsonML.getAttributes(node).href)
      ), (node, index) => {
        return <Link to={JsonML.getAttributes(node).href}
          key={index}>{toReactComponent(JsonML.getChildren(node)[0])}</Link>;
      }],
    ],
  };
};
