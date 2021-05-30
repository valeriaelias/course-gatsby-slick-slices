"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logo = _interopRequireDefault(require("@bit/logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n  margin-bottom: 3rem;\n\n\n  .logo {\n\n\n    transform: translateY(-25%);\n\n\n  }\n\n\n  ul {\n\n\n    margin: 0;\n\n\n    padding: 0;\n\n\n    text-align: center;\n\n\n    list-style: none;\n\n\n    display: grid;\n\n\n    grid-template-columns: 1fr 1fr auto 1fr 1fr;\n\n\n    grid-gap: 2rem;\n\n\n    align-items: center;\n\n\n    margin-top: -6rem;\n\n\n  }\n\n\n  li {\n\n\n    --rotate: -2deg;\n\n\n    transform: rotate(var(--rotate));\n\n\n    order: 1;\n\n\n    &:nth-child(1) {\n\n\n      --rotate: 1deg;\n\n\n    }\n\n\n    &:nth-child(2) {\n\n\n      --rotate: -2.5deg;\n\n\n    }\n\n\n    &:nth-child(4) {\n\n\n      --rotate: 2.5deg;\n\n\n    }\n\n\n    &:hover {\n\n\n      --rotate: 3deg;\n\n\n    }\n\n\n  }\n\n\n  a {\n\n\n    font-size: 3rem;\n\n\n    text-decoration: none;\n\n\n    &:hover {\n\n\n      color: var(--red);\n\n\n    }\n\n\n    /*&[aria-current='page'] {\n\n\n      color: var(--red);\n\n\n    }*/\n\n\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavStyles = _styledComponents["default"].nav(_templateObject());

function Nav() {
  return /*#__PURE__*/_react["default"].createElement(NavStyles, null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: "/pizzas/"
  }, "Pizza Menu")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: "/"
  }, /*#__PURE__*/_react["default"].createElement(_logo["default"], null))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: "/slicemasters/"
  }, "SliceMasters")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: "/order/"
  }, "Order Ahead!"))));
}

var _default = Nav;
exports["default"] = _default;

//# sourceMappingURL=Nav.js.map