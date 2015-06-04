var cricket = {

	chirp : function(numOfChirps){

		numOfChirps = numOfChirps;
		numOfChirps += 40;
		var fTempVal = numOfChirps;
		var cTempVal =Math.floor((fTempVal - 32) * (5 / 9));
		return cTempVal
	}
}

