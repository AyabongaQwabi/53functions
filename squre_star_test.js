
QUnit.test("Square Draw (*) Function",function(assert){

            var result  =draw(5);
            var top = "* * * * * ";
            var bottom ="* * * * * ";            
            var middle ="*       *\n*       *\n*       *";

            


            
            var expected = [top,middle,bottom];
            
            assert.equal(top ,result[0],'Top Bar chars equal');
        	assert.equal(middle ,result[1],'Mid Bar chars equal');
        	assert.equal(bottom ,result[2],'Bottom Bar chars equal');

})
