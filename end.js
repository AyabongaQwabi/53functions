
var end = function(sentence){


		

		var ends =[]; // all word starting letters in sentece(including those duplicated)
        var letters =[];//non-duplicated word starting 'letters' array
        var occurances =[]//number of occurances of each letter in 'letters' array

        var words = sentence.split(' ');//convert sentence from string to array
        words.forEach(function(word){
            
            ends.push(word.substring(word.length-1,word.length));//push each word starting letter to 'ends' array
        });

        ends.sort();//sort array of duplicate and non-duplicate starting letters                
        
        var mostOccured = most(ends);
        return mostOccured;
    
		
        
        

}

console.log(end('the quick tall king from the spaza killed his tailsman from finland'));