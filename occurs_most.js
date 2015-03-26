//var Words= require('./start');
function occursMost(sentence){

	sentence = sentence.toLowerCase().split(" ");
	var letters = [];
	sentence.forEach(function(word){

		word = word.split('')
		word.forEach(function(letter){

			letters.push(letter.toString());
		});

	});
    return most(letters.sort());
	
}

console.log(occursMost("bhe quick brown fox jumps over bhe lazy dog but still luckily finds a bane to eat at the mall editors dam"));