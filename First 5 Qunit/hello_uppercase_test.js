function hello_uppercase_test(){

	TestMyCode.run("Testing hello world function", function(assert){
    
    var name = prompt("Enter your Name");
    var result = hello_uppercase(name);
    alert(result);
    var expected = "Hell0o "+name+"!";




    // is the result as we expected?
   assert.equals(expected, result);

});
}
