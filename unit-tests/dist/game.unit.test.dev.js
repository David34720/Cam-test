"use strict";

var _nodeTest = require("node:test");

var _nodeAssert = _interopRequireDefault(require("node:assert"));

var _game = require("./game.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _nodeTest.describe)("calcXp(level)", function () {
  (0, _nodeTest.it)("Niveau 1", function () {
    var result = (0, _game.calcXp)(1);

    _nodeAssert["default"].equal(result, 1);
  });
  (0, _nodeTest.it)("Niveau 5", function () {
    var result = (0, _game.calcXp)(5);

    _nodeAssert["default"].equal(result, 5);
  });
  (0, _nodeTest.it)("Niveau 50", function () {
    var result = (0, _game.calcXp)(50);

    _nodeAssert["default"].equal(result, 50);
  });
  (0, _nodeTest.it)("Niveau 51", function () {
    var result = (0, _game.calcXp)(51);

    _nodeAssert["default"].equal(result, 50);
  });
  (0, _nodeTest.it)("Niveau 52", function () {
    var result = (0, _game.calcXp)(52);

    _nodeAssert["default"].equal(result, 51);
  });
  (0, _nodeTest.it)("Niveau 100", function () {
    var result = (0, _game.calcXp)(100);

    _nodeAssert["default"].equal(result, 75);
  });
  (0, _nodeTest.it)("Niveau 101", function () {
    var result = (0, _game.calcXp)(101);

    _nodeAssert["default"].equal(result, 75);
  });
  (0, _nodeTest.it)("Niveau 200", function () {
    var result = (0, _game.calcXp)(200);

    _nodeAssert["default"].equal(result, 108);
  });
  (0, _nodeTest.it)("Niveau 205", function () {
    var result = (0, _game.calcXp)(205);

    _nodeAssert["default"].equal(result, 109);
  });
  (0, _nodeTest.it)("Niveau 500", function () {
    var result = (0, _game.calcXp)(500);

    _nodeAssert["default"].equal(result, 168);
  });
});