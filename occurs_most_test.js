
QUnit.test("returns most occuring letter in sentence",function(assert){
		 	
			var result  = occursMost("This is a verfy funny codes");
            var expected = 's';
            assert.equal(result ,expected);
});

