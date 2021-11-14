'use strict';

var style = {
  position: 'absolute',
  bottom: '0',
  right: '0',
  padding: '1em',
  display: 'block',
  textDecoration: 'none',
  fontSize: '14px',
  fontStyle: 'italic',
  color: 'gray',
  transition: 'color 1s'
};

var Link = function Link() {
  return /*#__PURE__*/React.createElement("a", {
    style: style,
    href: "https://www.oreilly.com/",
    title: "Visit book site"
  }, "Designing React Hook The Right Way");
};

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var div = document.createElement("div");
document.body.appendChild(div);
render( /*#__PURE__*/React.createElement(Link, null), div);

module.exports = Link;
