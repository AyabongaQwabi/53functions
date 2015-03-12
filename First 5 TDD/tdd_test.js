
TestMyCode.run("testing multiple functions", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("hello world!", result);

    var result = hello_joe("joe");
    
    // is the result as we expected?
   assert.equals("Hello!", result);


    var result = helloUpper("world");
    
    // is the result as we expected?
   assert.equals("Hello WORLD!", result);

    var result = number_list(5);
    var expecto =[1,2,3,4,5,6]
    // is the result as we expected?
   assert.equals(expecto, result);

   var result = sumNumbers(10);
    
    // is the result as we expected?
   assert.equals(55, result);

});


var stats = getStats();


document.getElementById("stats").innerHTML +="<h4>"+stats[0]+" Tests </h4>"+"<br/>PASS :"+stats[1]+"<br/>FAIL :"+stats[2];