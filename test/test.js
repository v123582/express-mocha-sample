var assert = require('assert');
var fetch = require("node-fetch");
var helpers = require('../helpers');

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
describe('Sum #1 測試檔案內的函式', function() {
    it('sum(1,2) == 3 ?', function() {
      assert.equal(sum(1, 2), 3);
    });
}); 


// #2 測試檔案外的函式
describe('Sum #2 測試檔案外的函式', function() {
    it('sum(1,2) == 3 ?', function() {
      assert.equal(helpers.sum(1, 2), 3);
    });
}); 

// #3 測試路由 - fetch
describe('Sum #3 測試路由 - fetch', function() {
    it('sum(1,2) == 3 ?', function(done) {
      fetch('http://localhost:3000/sum?a=1&b=2')
	    .then((res) => {
	        return res.json()
	    })
	    .then((res) => {
	        assert.equal(res, 3)
	        done()
	    })
    });
}); 