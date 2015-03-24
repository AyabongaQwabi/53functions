
function longest_word(sentence){
	
	var words = sentence.split(" ");
	var long = words[0];
        for(var i = 0 ; i < words.length ; i++)
	{	if(words[i].split("").length > long.split("").length){

 			long = words[i];
		}
	}
	
	return long;
  }

console.log(longest_word("try finding onetwothreefour in this longass embarassing sentence"));
		
