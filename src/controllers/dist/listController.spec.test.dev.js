"use strict";

var _mocha = require("mocha");

var _chai = require("chai");

var _associations = require("../models/associations.js");

var apiBaseUrl = "http://localhost:".concat(process.env.PORT);
(0, _mocha.describe)("Lists endpoints", function () {
  (0, _mocha.describe)("[GET] /lists", function () {
    (0, _mocha.it)("should return a 200 http code", function _callee() {
      var response;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists")));

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
    (0, _mocha.it)("should return an empty array of lists", function _callee2() {
      var response, lists;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists")));

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              lists = _context2.sent;
              (0, _chai.expect)(lists.length).to.equal(0);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return an array", function _callee3() {
      var response, lists;
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists")));

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              lists = _context3.sent;
              (0, _chai.expect)(lists).to.be.a("array");

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return and array of all lists", function _callee4() {
      var response, lists;
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_associations.List.create({
                title: "New liste"
              }));

            case 2:
              _context4.next = 4;
              return regeneratorRuntime.awrap(_associations.List.create({
                title: "New liste 2"
              }));

            case 4:
              _context4.next = 6;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists")));

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return regeneratorRuntime.awrap(response.json());

            case 9:
              lists = _context4.sent;
              // ? bancale
              (0, _chai.expect)(lists[1].title).to.equal("New liste");
              (0, _chai.expect)(lists[0].title).to.equal("New liste 2");

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return an object", function _callee5() {
      var list, response, listObj;
      return regeneratorRuntime.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_associations.List.create({
                title: "New liste"
              }));

            case 2:
              list = _context5.sent;
              _context5.next = 5;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists/").concat(list.id)));

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return regeneratorRuntime.awrap(response.json());

            case 8:
              listObj = _context5.sent;
              (0, _chai.expect)(listObj).to.be.a("object");

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return one list", function _callee6() {
      var list, response, listResp;
      return regeneratorRuntime.async(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(_associations.List.create({
                title: "New liste"
              }));

            case 2:
              list = _context6.sent;
              _context6.next = 5;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists/").concat(list.id)));

            case 5:
              response = _context6.sent;
              _context6.next = 8;
              return regeneratorRuntime.awrap(response.json());

            case 8:
              listResp = _context6.sent;
              (0, _chai.expect)(listResp.title).to.equal("New liste");

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return a deep equal object", function _callee7() {
      var list, response, listResp;
      return regeneratorRuntime.async(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(_associations.List.create({
                title: "New liste"
              }));

            case 2:
              list = _context7.sent;
              _context7.next = 5;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists/").concat(list.id)));

            case 5:
              response = _context7.sent;
              _context7.next = 8;
              return regeneratorRuntime.awrap(response.json());

            case 8:
              listResp = _context7.sent;
              (0, _chai.expect)(listResp).to.deep.equal(JSON.parse(JSON.stringify(list)));

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return 404", function _callee8() {
      var response;
      return regeneratorRuntime.async(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return regeneratorRuntime.awrap(_associations.List.create({
                title: "New liste"
              }));

            case 2:
              _context8.next = 4;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists/120")));

            case 4:
              response = _context8.sent;
              (0, _chai.expect)(response.status).to.equal(404);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      });
    });
  });
  (0, _mocha.describe)("[POST] /lists", function () {
    (0, _mocha.it)("should return an 201 status code", function _callee9() {
      var listObj, response;
      return regeneratorRuntime.async(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              listObj = {
                title: "New liste"
              };
              _context9.next = 3;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json"
                },
                body: JSON.stringify(listObj)
              }));

            case 3:
              response = _context9.sent;
              (0, _chai.expect)(response.status).to.equal(201);

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return an object", function _callee10() {
      var listObj, response, list;
      return regeneratorRuntime.async(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              listObj = {
                title: "New liste"
              };
              _context10.next = 3;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json"
                },
                body: JSON.stringify(listObj)
              }));

            case 3:
              response = _context10.sent;
              _context10.next = 6;
              return regeneratorRuntime.awrap(response.json());

            case 6:
              list = _context10.sent;
              (0, _chai.expect)(list).to.be.a("object");

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      });
    });
    (0, _mocha.it)("should return an 400 status code", function _callee11() {
      var listObj, response;
      return regeneratorRuntime.async(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              listObj = {
                content: "New liste"
              };
              _context11.next = 3;
              return regeneratorRuntime.awrap(fetch("".concat(apiBaseUrl, "/lists"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json"
                },
                body: JSON.stringify(listObj)
              }));

            case 3:
              response = _context11.sent;
              (0, _chai.expect)(response.status).to.equal(400);

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      });
    }); // ! ... to be continued tester destroy, tester update etc etc
    // ! ... faire la même avec cardController
  });
});