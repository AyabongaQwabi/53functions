QUnit.test("High and Low ",function(assert){
	
	var list =[1,3,2,7,4]
	var result =high_low(list).toString();
	var expected = "7,1";
	assert.equal(result,expected,"Calculates the length of a string");
})