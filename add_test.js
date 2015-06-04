QUnit.test("Add two numbers",function(assert){
		var expected  = 1500;
		var result = add(600,900);

		assert.equal(result , expected,'ADDITION')
})