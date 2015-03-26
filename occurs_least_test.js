
QUnit.test("returns least occuring letter in sentence",function(assert){
		 	
			var result  = occursLeast("This is a verfy funny codes that I made up coz its ugly").toLowerCase();
            var expected = 'g';
            assert.equal(result ,expected);
});

