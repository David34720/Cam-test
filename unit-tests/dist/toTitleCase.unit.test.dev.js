"use strict";

var _nodeTest = require("node:test");

var _nodeAssert = _interopRequireDefault(require("node:assert"));

var _toTitleCase = require("./toTitleCase.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _nodeTest.describe)("toTitleCase()", function () {
  (0, _nodeTest.it)("Mot en minuscules", function () {
    var result = (0, _toTitleCase.toTitleCase)("oclock");

    _nodeAssert["default"].equal(result, "Oclock");
  });
  (0, _nodeTest.it)("Mot avec un chiffre", function () {
    var result = (0, _toTitleCase.toTitleCase)("ocl0ck");

    _nodeAssert["default"].equal(result, "Ocl0ck");
  });
  (0, _nodeTest.it)("String vide", function () {
    var result = (0, _toTitleCase.toTitleCase)("");

    _nodeAssert["default"].equal(result, "");
  });
  (0, _nodeTest.it)("Phrase", function () {
    var result = (0, _toTitleCase.toTitleCase)("oclock c'est pas top ca rime");

    _nodeAssert["default"].equal(result, "Oclock C'est Pas Top Ca Rime");
  });
});