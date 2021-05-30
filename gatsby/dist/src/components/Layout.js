"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("normalize.css");

var _nav = _interopRequireDefault(require("@bit/nav"));

var _valeriacgeliasGeneral = _interopRequireDefault(require("@bit/valeriacgelias.general.footer"));

var _globalStyles = _interopRequireDefault(require("@bit/global-styles"));

var _Typography = _interopRequireDefault(require("../styles/Typography"));

var _stripes = _interopRequireDefault(require("@bit/stripes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n  background: white;\n\n\n\n\n\n\n\n  padding: 2rem;\n\n\n\n\n\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n  max-width: 1000px;\n\n\n\n\n\n\n\n  margin: 12rem auto 4rem auto;\n\n\n\n\n\n\n\n  margin-top: clamp(2rem, 10vw, 12rem);\n\n\n\n\n\n\n\n  background: white url(", ");\n\n\n\n\n\n\n\n  background-size: 1500px;\n\n\n\n\n\n\n\n  padding: 5px;\n\n\n\n\n\n\n\n  padding: clamp(5px, 1vw, 25px);\n\n\n\n\n\n\n\n  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.044);\n\n\n\n\n\n\n\n  border: 5px solid white;\n\n\n\n\n\n\n\n  @media (max-width: 1100px) {\n\n\n\n\n\n\n\n    margin-left: 1.5rem;\n\n\n\n\n\n\n\n    margin-right: -1.5rem;\n\n\n\n\n\n\n\n  }\n\n\n\n\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SiteBorderStyles = _styledComponents["default"].div(_templateObject(), _stripes["default"]);

var ContentStyles = _styledComponents["default"].div(_templateObject2());

function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_globalStyles["default"], null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null), /*#__PURE__*/_react["default"].createElement(SiteBorderStyles, null, /*#__PURE__*/_react["default"].createElement(ContentStyles, null, /*#__PURE__*/_react["default"].createElement(_nav["default"], null), children, /*#__PURE__*/_react["default"].createElement(_valeriacgeliasGeneral["default"], null))));
}

var _default = Layout;
exports["default"] = _default;

//# sourceMappingURL=Layout.js.map