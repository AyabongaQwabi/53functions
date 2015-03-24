
   function sum_words(sentence){
		var sum = 0;
 		var words = sentence.split(" ");
		for( var i = 0 ; i < words.length ; i++ )
		{			
			sum+=words[i].split("").length;
		}
		return sum;

	}
console.log(sum_words("The aya himself"));

