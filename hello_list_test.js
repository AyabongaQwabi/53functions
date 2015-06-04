
QUnit.test("Hello list Function",function(assert){

        var result=hello_list(2);
        var expected=["Hello World!","Hello World!"]
        assert.equal(expected.toString(),result.toString(),"Returns Hello World! 2 times");

})
