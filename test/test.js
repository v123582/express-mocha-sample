var assert = require('assert');
var fetch = require("node-fetch");
var request = require('supertest');
var sinon = require('sinon');
var helpers = require('../helpers');
var app = require('../app');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.strictEqual([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// function sum(a, b) {
//     return a + b
// }

// // #1 測試檔案內的函式
// describe('Sum #1 測試檔案內的函式', function() {
//     it('sum(1,2) == 3 ?', function() {
//       assert.strictEqual(sum(1, 2), 3);
//     });
// }); 


// // #2 測試檔案外的函式
// describe('Sum #2 測試檔案外的函式', function() {
//     it('sum(1,2) == 3 ?', function() {
//       assert.strictEqual(helpers.sum(1, 2), 3);
//     });
// }); 

// // #3 測試路由 - fetch
// describe('Sum #3 測試路由 - fetch', function() {
//     it('sum(1,2) == 3 ?', function(done) {
//       fetch('http://localhost:3000/sum?a=1&b=2')
// 	    .then((res) => {
// 	        return res.json()
// 	    })
// 	    .then((res) => {
// 	        assert.strictEqual(res, "3")
// 	        done()
// 	    })
//     });
// }); 

// #4 測試路由 - supertest
// describe('Sum #4 測試路由 - supertest', function(done) {
//     it('sum(1,2) == 3 ?', function(done) {
//       	request(app)
// 	      .get('/sum?a=1&b=2')
// 	      .end(function(err, res) {
// 	        assert.strictEqual(res.text, "3");
// 	        return done();
// 	      });
//     });
// }); 

// // #5 模擬登入 - stub
// describe('Sum #5 模擬登入 - stub', function(done) {
    
// 	before(async() => {
//       this.logined = sinon.stub(
//         helpers, 'logined'
//       ).returns(true);
//     })

//     it('sum(1,2) == 3 ?', function(done) {
//       	request(app)
// 	      .get('/sum?a=1&b=2')
// 	      .end(function(err, res) {
// 	        assert.strictEqual(res.text, "3");
// 	        return done();
// 	      });
//     });
//     it('sum(1,2) == 3 ?', function(done) {
//       	request(app)
// 	      .get('/sum?a=1&b=2')
// 	      .end(function(err, res) {
// 	        assert.strictEqual(res.text, "3");
// 	        return done();
// 	      });
//     });

//     after(async () => {
//       this.logined.restore();
//     })
// });

// // #6 模擬登入 - mock
// describe('Sum #6 模擬登入 - mock', function(done) {
    
// 	before(async() => {
//       this.logined = sinon.mock(helpers)
//         .expects('logined')
//         .once()
//         .returns(true);
//     })

//     it('sum(1,2) == 3 ?', function(done) {
//       	request(app)
// 	      .get('/sum?a=1&b=2')
// 	      .end(function(err, res) {
// 	        assert.strictEqual(res.text, "3");
// 	        return done();
// 	      });
//     });
//     it('sum(1,2) == 3 ?', function(done) {
//       	request(app)
// 	      .get('/sum?a=1&b=2')
// 	      .end(function(err, res) {
// 	        assert.strictEqual(res.text, "3");
// 	        return done();
// 	      });
//     });

//     after(async () => {
//       helpers.logined.restore();
//     })
// });

// #7 模擬登入 - 手動
describe('Sum #7 模擬登入 - 手動', function(done) {
    
    it('sum(1,2) == "" ?', function(done) {
        request(app)
	      .get('/sum?a=1&b=2')
	      .set('Accept', 'application/json')
	      .end(function(err, res) {
	        assert.strictEqual(res.text, "");
	        return done();
	      });
    });

    it('sum(1,2) == 3 ?', function(done) {
      	request(app)
	      .get('/login')
	      .end(function(err, res) {
	        request(app)
		      .get('/sum?a=1&b=2')
		      .end(function(err, res) {
		        assert.strictEqual(res.text, "3");
		        return done();
		      });
	      });
    });

});