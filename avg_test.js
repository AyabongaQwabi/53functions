
QUnit.test("Average word length rounded up test",function(assert){
		 	
			var result  = avg("This is a verfy funny code");
                        var expected = 4 ;
                        assert.equal(result ,expected);
});

