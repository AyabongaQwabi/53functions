QUnit.test("Hello Function",function(assert){
	
	var result=helloWorld();
	var expected="hello world!"
	assert.equal(expected,result,"Returns Hello World!");

})