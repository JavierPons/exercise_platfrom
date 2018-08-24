var assert       = require('chai').assert
var compare      = require('../02_javascript/block1/exercise6').compare
var arr          = require('../02_javascript/block1/exercise6').arr


describe("#test1", function(){
    it ('a should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('a should be a function', function(){
        assert.typeOf(compare, 'function')
    })
})
describe("#test3", function(){
    it ('compare should be 1', function(){
        assert.equal(compare([10, 22,43,54,65,34,10,10]),1)
    })
})
describe("#test4", function(){
    it ('compare should be 0', function(){
        assert.equal(compare([10, 44,43,0,2,34,11,12]),0)
    })
})
describe("#test5", function(){
    it ('compare should be 2', function(){
        assert.equal(compare([43,66,11,55,3,53,54,65,3,54,64,5,4,6,22,22,17,12,5,5]),2)
    })
})
describe("#test6", function(){
    it ('compare should be 3', function(){
        assert.equal(compare([12,12,"Hello", "Hello", {},{},[],[], 'ciao','ciao']),3)
    })
})