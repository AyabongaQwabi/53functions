QUnit.test("Sum Words Test" , function(assert){

		var result   = sum_words("Ok try counting with these words");
                var expected = 27;
		assert.equal(result,expected,"Sums the length of words");
});

