QUnit.test("Reverse Function Test",function(assert){
	
	var result=reverse("codex").toString();
	var expected="xedoc";
	assert.equal(expected,result,"");

})