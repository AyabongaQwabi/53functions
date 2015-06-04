QUnit.test("Divides two numbers",function(assert){
		var expected  = 0.6666666;
		var result = divide(600,900);

		assert.equal(result , expected,'DIVISION')
})