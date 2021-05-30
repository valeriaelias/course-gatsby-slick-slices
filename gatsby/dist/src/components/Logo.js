"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Logo;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _stripes = _interopRequireDefault(require("@bit/stripes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n  /* This value controls the entire size of the logo*/\n\n\n  font-size: 6px;\n\n\n  font-size: clamp(1px, 0.65vw, 8px);\n\n\n  width: 30em;\n\n\n  height: 30em;\n\n\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n\n\n  margin: 0;\n\n\n  --borderSize: 1em;\n\n\n  background: white url(", ");\n\n\n  background-size: 150em;\n\n\n  border: var(--borderSize) solid white;\n\n\n  display: flex;\n\n\n  .inner {\n\n\n    margin: var(--borderSize);\n\n\n    flex: 1;\n\n\n    background: white;\n\n\n    display: grid;\n\n\n    grid-template-rows: 20% 1fr 1fr;\n\n\n    align-content: center;\n\n\n  }\n\n\n  .est {\n\n\n    font-size: 1.5em;\n\n\n    align-self: center;\n\n\n  }\n\n\n  h1 {\n\n\n    display: grid;\n\n\n    grid-template-rows: 8fr 2fr;\n\n\n    align-items: center;\n\n\n    margin: 0;\n\n\n    grid-row: 2 / span 2;\n\n\n    grid-gap: 2em;\n\n\n    transform: translateY(-0.7em);\n\n\n  }\n\n\n\n\n\n  .slices {\n\n\n    font-size: 3.2em;\n\n\n    letter-spacing: 0.2em;\n\n\n    transform: translateY(-0.15em);\n\n\n  }\n\n\n  .slicks {\n\n\n    transform: scale(1.4);\n\n\n    display: block;\n\n\n    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);\n\n\n    perspective: 100px;\n\n\n  }\n\n\n  .letter {\n\n\n    font-size: 5em;\n\n\n    color: var(--red);\n\n\n    --scale: 1;\n\n\n    --rotate: -10deg;\n\n\n    --translateX: 0;\n\n\n    --translateY: 0;\n\n\n    --rotateX: 0deg;\n\n\n    transform: scale(var(--scale)) rotate(var(--rotate))\n\n\n      translateX(var(--translateX)) translateY(var(--translateY))\n\n\n      rotateX(var(--rotateX));\n\n\n    display: inline-block;\n\n\n    line-height: 1;\n\n\n    transition: transform 0.3s;\n\n\n    &.S {\n\n\n      --translateX: -0.05;\n\n\n    }\n\n\n    &.l {\n\n\n      --rotate: 2deg;\n\n\n      --scale: 1.4;\n\n\n      --translateX: 0.05em;\n\n\n      --translateY: -0.05em;\n\n\n    }\n\n\n    &.i {\n\n\n      --scale: 0.9;\n\n\n      --translateY: -0.1em;\n\n\n      --translateX: 0.1em;\n\n\n    }\n\n\n    &.c {\n\n\n      --rotate: 3deg;\n\n\n      --scale: 0.9;\n\n\n      --translateX: 0.1em;\n\n\n      --translateY: 0.23em;\n\n\n    }\n\n\n    &.k {\n\n\n      --rotate: -12deg;\n\n\n      --scale: 1.2;\n\n\n      --translateX: 0.06em;\n\n\n    }\n\n\n    &.apos {\n\n\n      --translateX: 0.1em;\n\n\n    }\n\n\n    &.s {\n\n\n      --rotate: 12deg;\n\n\n      --scale: 0.9;\n\n\n      --translateY: -0.14em;\n\n\n    }\n\n\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LogoStyles = _styledComponents["default"].div(_templateObject(), _stripes["default"]);

function Logo() {
  return /*#__PURE__*/_react["default"].createElement(LogoStyles, {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "inner"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "est"
  }, "EST 1994"), /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "slicks"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter S"
  }, "S"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter l"
  }, "l"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter i"
  }, "i"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter c"
  }, "c"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter k"
  }, "k"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter apos"
  }, "'"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "letter s"
  }, "s")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "slices"
  }, "slices"))));
}

//# sourceMappingURL=Logo.js.map