"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query {\n      toppings: allSanityTopping {\n        nodes {\n          name\n          id\n          vegetarian\n        }\n      }\n      pizzas: allSanityPizza {\n        nodes {\n          toppings {\n            name\n            id\n          }\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 4rem;\n  a {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-gap: 0 1rem;\n    align-items: center;\n    padding: 5px;\n    background: var(--grey);\n    border-radius: 2px;\n    .count {\n      background: white;\n      padding: 2px 5px;\n    }\n    .active {\n      background: var(--yellow);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToppingsStyles = _styledComponents["default"].div(_templateObject());

function countPizzasInToppings(pizzas) {
  // Return pizzas with counts
  console.log(pizzas);
  var counts = pizzas.map(function (pizza) {
    return pizza.toppings;
  }).flat().reduce(function (acc, topping) {
    // check if it is an existing topping
    var existingTopping = acc[topping.id];

    if (existingTopping) {
      // if it is, increment by 1
      existingTopping.count += 1;
    } else {
      // otherwise create a new entry in our acc and set it to one
      acc[topping.id] = {
        id: topping.id,
        name: topping.name,
        count: 1
      };
    }

    return acc;
  }, {});
  var sortedToppings = Object.values(counts).sort(function (a, b) {
    return b.count - a.count;
  });
  return sortedToppings;
}

function ToppingsFilter() {
  // Get a list of list all the toppings
  var _useStaticQuery = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject2())),
      toppings = _useStaticQuery.toppings,
      pizzas = _useStaticQuery.pizzas;

  console.clear(); // console.log({ toppings, pizzas });
  // Get a list of all the pizzas with their toppings

  var toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  console.log(toppingsWithCounts); // Count how many pizzas are in each topping
  // Loop over the list of toppings and siplay the topping and the count of pizzas in that topping
  // Link it up...

  return /*#__PURE__*/_react["default"].createElement(ToppingsStyles, null, /*#__PURE__*/_react["default"].createElement("p", null, "Toppings"), toppingsWithCounts.map(function (topping) {
    return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
      to: "/topping/".concat(topping.name),
      key: topping.id
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "name"
    }, topping.name), /*#__PURE__*/_react["default"].createElement("span", {
      className: "count"
    }, topping.count));
  }));
}

var _default = ToppingsFilter;
exports["default"] = _default;

//# sourceMappingURL=ToppingsFilter.js.map