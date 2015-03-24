QUnit.test("Length Function",function(assert){
	
	var result =length("My very long string");
	var expected = 19;
	assert.equal(result,expected,"Calculates the length of a string");
})