function hello_test(){

	TestMyCode.run("Testing hello world function", function(assert){
    var result = helloWorld();
    




    // is the result as we expected?
   assert.equals("hello world!", result);

});
}