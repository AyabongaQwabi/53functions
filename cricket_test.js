QUnit.test("Temperature Conversion",function(assert){

		var expected = 15;
		var result = cricket.chirp(5);

		assert.equal(result,expected,'Faraheight to Dehrees conversion');
});