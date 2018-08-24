var assert                  = require('chai').assert
var boolanChecker           = require('../02_javascript/block4/exercise7').boolanChecker

describe("#test0", function(){
    it ('boolanChecker should be a function', function(){
        assert.typeOf(boolanChecker, 'function')
    })
})
describe("#test1", function(){
    it ("boolanChecker should be 0 booleans were found", function(){
        assert.equal(boolanChecker(["12", "55","hello"],3),
        "0 booleans were found ")
    })
})
describe("#test2", function(){
    it ("boolanChecker should be 3 booleans were found true,false,true", function(){
        assert.equal(boolanChecker(["12", "55",true, false,true,true,true],3),
        "3 booleans were found true,false,true")
    })
})
describe("#test3", function(){
    it ("boolanChecker should be 5 booleans were found true,false,true,true,true", function(){
        assert.equal(boolanChecker(["12", "55",true, false,true,true,true]),
        "5 booleans were found true,false,true,true,true")
    })
})
describe("#test4", function(){
    it ("boolanChecker should be 1 booleans were found true,", function(){
        assert.equal(boolanChecker(["12", "55",true, false,true,true,true],1),
        "1 booleans were found true")
    })
})