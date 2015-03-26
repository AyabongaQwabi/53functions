




var start = function(sentence){


		var words = sentence.split(' ');
		var starts =[];
                
                words.forEach(function(word){
                       starts.push(word[0]);
                });
                starts.sort();
                console.log(starts.toString());

        var letters =[];
        var occurances =[]
        var count =0;
        for( var i = 0 ;i< starts.length;i++){

        		var letter = starts[i];
        		console.log("###   letter  * "+letter+" * @ index"+i);
        		var exists = (letters.indexOf(letter)) > (-1);

        		if( !exists){
        			letters.push(letter);
        			console.log("push * "+letter+" * to array ...& array now is [ "+letters+" ]");
        			console.log("--- now checking for  occurances ---")
        			for(var j = i ; j<= starts.length ;j++){
        				
        				if(starts[j] == letter){
        					
        					console.log(" current occurances   : "+count)
        					count++;
        					console.log(" occurances += 1  : "+count)
        				}
        				else{
        					console.log("------------------------------------------------")
        					occurances.push(count);
        					count =0;
        					break;

        				}

        			}
        		}
        		else{console.log("### already checked !")}

        		

        } 
		console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
		console.log(letters);
		console.log(occurances);
		console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");      
		starts.forEach(function(letter){
			console.log(letter+" : "+starts.indexOf(letter));
		});

}

start('the quick tall king from the spaza killed his tailsman from finland');

               
