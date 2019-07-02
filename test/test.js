var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

function sum(a, b) {
    return a + b
}

// #1 測試檔案內的函式
describe('Sum', function() {
    it('sum(1,2) == 3 ?', function() {
      assert.equal(sum(1, 2), 3);
    });
}); 