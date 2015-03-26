//var Words= require('./start');
function occursLeast(sentence){

	sentence = sentence.toLowerCase().split(" ");
	var letters = [];
	sentence.forEach(function(word){

		word = word.split('')
		word.forEach(function(letter){

			letters.push(letter.toString());
		});

	});
    return least(letters.sort());
	
}

console.log(occursLeast("This is a verfy funny codes that I made up coz its ugly").toLowerCase());