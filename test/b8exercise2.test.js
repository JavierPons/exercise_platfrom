var assert                      = require('chai').assert,
    recursive                   = require('../02_javascript/block8/exercise2.js').recursive;


describe("#test1", function(){
    it ('recursive should be  a function', function(){
        assert.typeOf(recursive, 'function')
    })
})
describe("#test2", function(){
    it ('tally should be robert, 22,roger,44', function(){
        var a = []
        var arr = recursive([{name:'robert', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:98},{name:'Ralph', age:67}],0,a)
        assert.equal(a[0][0], 'robert')
        assert.equal(a[0][1], 22)
        assert.equal(a[2][0], 'roger')
        assert.equal(a[2][1], 44)


    })
})