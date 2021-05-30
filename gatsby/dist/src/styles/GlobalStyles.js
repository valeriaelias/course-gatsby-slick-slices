"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _bg = _interopRequireDefault(require("@bit/bg"));

var _stripes = _interopRequireDefault(require("@bit/stripes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n  :root {\n\n\n    --red: #FF4949;\n\n\n    --black: #2E2E2E;\n\n\n    --yellow: #ffc600;\n\n\n    --white: #fff;\n\n\n    --grey: #efefef;\n\n\n  }\n\n\n  html {\n\n\n    background-image: url(", ");\n\n\n    background-size: 450px;\n\n\n    background-attachment: fixed;\n\n\n    font-size: 10px;\n\n\n  }\n\n\n\n\n\n  body {\n\n\n    font-size: 2rem;\n\n\n  }\n\n\n\n\n\n  fieldset {\n\n\n    border-color: rgba(0,0,0,0.1);\n\n\n    border-width: 1px;\n\n\n  }\n\n\n\n\n\n  button {\n\n\n    background: var(--red);\n\n\n    color: white;\n\n\n    border: 0;\n\n\n    padding: 0.6rem 1rem;\n\n\n    border-radius: 2px;\n\n\n    cursor: pointer;\n\n\n    --cast: 2px;\n\n\n    box-shadow: var(--cast) var(--cast) 0 var(--grey);\n\n\n    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);\n\n\n    transition: all 0.2s;\n\n\n    &:hover {\n\n\n      --cast: 4px;\n\n\n    }\n\n\n  }\n\n\n\n\n\n  .gatsby-image-wrapper img[src*=base64\\,] {\n\n\n    image-rendering: -moz-crisp-edges;\n\n\n    image-rendering: pixelated;\n\n\n  }\n\n\n\n\n\n  /* Scrollbar Styles */\n\n\n  body::-webkit-scrollbar {\n\n\n    width: 12px;\n\n\n  }\n\n\n  html {\n\n\n    scrollbar-width: thin;\n\n\n    scrollbar-color: var(--red) var(--white);\n\n\n  }\n\n\n  body::-webkit-scrollbar-track {\n\n\n    background: var(--white);\n\n\n  }\n\n\n  body::-webkit-scrollbar-thumb {\n\n\n    background-color: var(--red) ;\n\n\n    border-radius: 6px;\n\n\n    border: 3px solid var(--white);\n\n\n  }\n\n\n\n\n\n  hr {\n\n\n    border: 0;\n\n\n    height: 8px;\n\n\n    background-image: url(", ");\n\n\n    background-size: 1500px;\n\n\n  }\n\n\n\n\n\n  img {\n\n\n    max-width: 100%;\n\n\n  }\n\n\n\n\n\n  .tilt {\n\n\n    transform: rotate(-2deg);\n\n\n    position: relative;\n\n\n    display: inline-block;\n\n\n  }\n\n\n\n\n\n"], ["\n\n\n  :root {\n\n\n    --red: #FF4949;\n\n\n    --black: #2E2E2E;\n\n\n    --yellow: #ffc600;\n\n\n    --white: #fff;\n\n\n    --grey: #efefef;\n\n\n  }\n\n\n  html {\n\n\n    background-image: url(", ");\n\n\n    background-size: 450px;\n\n\n    background-attachment: fixed;\n\n\n    font-size: 10px;\n\n\n  }\n\n\n\n\n\n  body {\n\n\n    font-size: 2rem;\n\n\n  }\n\n\n\n\n\n  fieldset {\n\n\n    border-color: rgba(0,0,0,0.1);\n\n\n    border-width: 1px;\n\n\n  }\n\n\n\n\n\n  button {\n\n\n    background: var(--red);\n\n\n    color: white;\n\n\n    border: 0;\n\n\n    padding: 0.6rem 1rem;\n\n\n    border-radius: 2px;\n\n\n    cursor: pointer;\n\n\n    --cast: 2px;\n\n\n    box-shadow: var(--cast) var(--cast) 0 var(--grey);\n\n\n    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);\n\n\n    transition: all 0.2s;\n\n\n    &:hover {\n\n\n      --cast: 4px;\n\n\n    }\n\n\n  }\n\n\n\n\n\n  .gatsby-image-wrapper img[src*=base64\\\\,] {\n\n\n    image-rendering: -moz-crisp-edges;\n\n\n    image-rendering: pixelated;\n\n\n  }\n\n\n\n\n\n  /* Scrollbar Styles */\n\n\n  body::-webkit-scrollbar {\n\n\n    width: 12px;\n\n\n  }\n\n\n  html {\n\n\n    scrollbar-width: thin;\n\n\n    scrollbar-color: var(--red) var(--white);\n\n\n  }\n\n\n  body::-webkit-scrollbar-track {\n\n\n    background: var(--white);\n\n\n  }\n\n\n  body::-webkit-scrollbar-thumb {\n\n\n    background-color: var(--red) ;\n\n\n    border-radius: 6px;\n\n\n    border: 3px solid var(--white);\n\n\n  }\n\n\n\n\n\n  hr {\n\n\n    border: 0;\n\n\n    height: 8px;\n\n\n    background-image: url(", ");\n\n\n    background-size: 1500px;\n\n\n  }\n\n\n\n\n\n  img {\n\n\n    max-width: 100%;\n\n\n  }\n\n\n\n\n\n  .tilt {\n\n\n    transform: rotate(-2deg);\n\n\n    position: relative;\n\n\n    display: inline-block;\n\n\n  }\n\n\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), _bg["default"], _stripes["default"]);
var _default = GlobalStyles;
exports["default"] = _default;

//# sourceMappingURL=GlobalStyles.js.map