"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _frenchfries = _interopRequireDefault(require("../assets/fonts/frenchfries.woff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: FrenchFries;\n    src: url(", ");\n  }\n  html {\n    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--black);\n  }\n  p, li {\n    letter-spacing: 0.5px;\n  }\n  h1,h2,h3,h4,h5,h6 {\n    font-weight: normal;\n    margin: 0;\n  }\n  a {\n    color: var(--black);\n    text-decoration-color: var(--red);\n    /* Chrome renders this weird with this font, so we turn it off */\n    text-decoration-skip-ink: none;\n  }\n  mark, .mark {\n    background: var(--yellow);\n    padding: 0 2px 2px 2px;\n    margin: 0;\n    display: inline;\n    line-height: 1;\n  }\n\n  .center {\n    text-align: center;\n  }\n\n  .tilt {\n    transform: rotate(-2deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Typography = (0, _styledComponents.createGlobalStyle)(_templateObject(), _frenchfries["default"]);
var _default = Typography;
exports["default"] = _default;

//# sourceMappingURL=Typography.js.map