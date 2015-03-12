function hello_joe_test(){

	TestMyCode.run("Testing hello world function", function(assert){
    
    var name = prompt("Enter name ");
    var result = hello_joe(name);
    alert(result);
    var expected = "Hello joe!";




    // is the result as we expected?
   assert.equals(expected, result);

});
}
