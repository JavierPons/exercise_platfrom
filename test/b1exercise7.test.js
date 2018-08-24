var assert       = require('chai').assert
var isEven      = require('../02_javascript/block1/exercise7').isEven
var arr          = require('../02_javascript/block1/exercise7').arr


describe("#test1", function(){
    it ('a should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('isEven should be a function', function(){
        assert.typeOf(isEven, 'function')
    })
})
describe("#test3", function(){
    it ('isEven should be 5', function(){
        assert.equal(isEven([3, 123, 454, 34, 64, 6634, 876]),5)
    })
})
describe("#test4", function(){
    it ('isEven should be 6', function(){
        assert.equal(isEven([10, 44,43,0,2,34,11,12]),6)
    })
})
describe("#test5", function(){
    it ('isEven should be 9', function(){
        assert.equal(isEven([43,66,11,55,3,53,54,65,3,54,64,5,4,6,22,22,17,12,5,5]),9)
    })
})
describe("#test6", function(){
    it ('isEven should be 2', function(){
        assert.equal(isEven([12,12,"Hello", "Hello", {},{},[],[], 'ciao','ciao']),2)
    })
})