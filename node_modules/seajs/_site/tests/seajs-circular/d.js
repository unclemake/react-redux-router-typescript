define(function(require, exports) {
  exports.d = 'd';
  var c = require('./c');
  exports.d2 = 'd2';
  var e = require('./e');
  var test = require('../test');
  test.assert(c.c === 'c', 'c.c should be c');
  test.assert(c.c2 === 'c2', 'c.c2 should be c2');
  test.assert(e === 'e', 'e should be e');
});