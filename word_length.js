

var word_length = function(sentence){
	
	var words = sentence.split(' ');
        var sum = 0 ;
        var numWords = words.length;

	words.forEach(function(word){
		sum+=(word.split('').length);
        })
        
        sum = sum/numWords;      

        return Math.round(sum);




}





