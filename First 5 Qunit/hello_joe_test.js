QUnit.test("Hello Joe Function",function(assert){
	
	var result=hello_joe("Ayabonga");
	var expected="Hello Ayabonga!"
	assert.equal(expected,result,"");

})