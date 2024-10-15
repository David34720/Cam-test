"use strict";

var _mocha = require("mocha");

var _chai = require("chai");

var _associations = require("../models/associations.js");

var apiBaseUrl = "http://localhost:".concat(process.env.PORT);
(0, _mocha.describe)("Card endpoints", function () {
  (0, _mocha.describe)("[GET] /cards", function () {
    (0, _mocha.it)("should return a 200 http code", function _callee() {
      var response;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/cards")));

            case 2:
              response = _context.sent;
              (0, _chai.expect)(response.status).to.equal(200);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return one card", function _callee2() {
      var card, response, cards;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_associations.Card.create({
                title: "New card"
              }));

            case 2:
              card = _context2.sent;
              console.log(card);
              _context2.next = 6;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/cards/").concat(card.id)));

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return regeneratorRuntime.awrap(response.json());

            case 9:
              cards = _context2.sent;
              (0, _chai.expect)(cards.title).to.equal("New card");

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  });
});