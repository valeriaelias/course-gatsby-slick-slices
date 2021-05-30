"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("gatsby");

var _react = _interopRequireDefault(require("react"));

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  /* Take your row sizing nor from the PizzaStyles div, but from the PizzaGridaStyles grid */\n  /* If browser doesnt support subgrid */\n  @supports not (grid-template-rows: subgrid) {\n    --rows: auto auto 1fr;\n  }\n  grid-template-rows: var(--row, subgrid);\n  grid-row: span 3;\n  gap: 1rem;\n  h2,\n  p {\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 4rem;\n  grid-auto-rows: auto auto 500px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PizzaGridStyles = _styledComponents["default"].div(_templateObject());

var PizzaStyles = _styledComponents["default"].div(_templateObject2());

function SinglePizza(_ref) {
  var pizza = _ref.pizza;
  return /*#__PURE__*/_react["default"].createElement(PizzaStyles, null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: "pizza/".concat(pizza.slug.current)
  }, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "mark"
  }, pizza.name))), /*#__PURE__*/_react["default"].createElement("p", null, pizza.toppings.map(function (topping) {
    return topping.name;
  }).join(', ')), /*#__PURE__*/_react["default"].createElement(_gatsbyImage["default"], {
    fluid: pizza.image.asset.fluid,
    alt: pizza.name
  }));
}

function PizzaList(_ref2) {
  var pizzas = _ref2.pizzas;
  return /*#__PURE__*/_react["default"].createElement(PizzaGridStyles, null, pizzas.map(function (pizza) {
    return /*#__PURE__*/_react["default"].createElement(SinglePizza, {
      key: pizza.id,
      pizza: pizza
    });
  }));
}

var _default = PizzaList;
exports["default"] = _default;

//# sourceMappingURL=PizzaList.js.map