function sumNumbersTest(){

	TestMyCode.run("Testing sum numbers function", function(assert){
    

    
    var result = sumNumbers(10);
    
    var expected = 55;




    // is the result as we expected?
   assert.equals(expected, result);

});
}
