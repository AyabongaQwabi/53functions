QUnit.test("Number List Function Test",function(assert){
	
	var result=number_list(10).toString();
	var expected=[1,2,3,4,5,6,7,8,9,10].toString();
	assert.equal(expected,result,"Number List");

})