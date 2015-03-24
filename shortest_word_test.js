
QUnit.test("Shorttest Word Test" ,function(assert){
		var result = shortest_word("I think this words might just the long");
		var expected = "I";
		assert.equal(result,expected);
});