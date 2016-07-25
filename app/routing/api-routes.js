// ==============================================
// LOADING DATA  
// ++++++++++++++++++++++++++++++++++++++++++++++
var friendData 	= require('../data/friends.js');
var path 		= require('path');


// ==============================================
// ROUTING 
// ++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(app){

	//GET REQUESTS

	//when users visit 'api/friends/' they should get the JSON data
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	//API POST REQUESTS
	app.post('/api/friends', function(req, res){

		//do matching math...

		//This is the array of user scores =================================
		var newFriend = req.body.scores;
		var newfriendDiff = 0;
		var friendScoreDiffs = [];

		//This iterates over the user score array and adds the score together ===============================
		for(var x = 0; x < newFriend.length; x++){
			newfriendDiff += Math.abs(newFriend[x]); 
		}
		
		console.log("This is the total user score: " + newfriendDiff);

		//This iterates over the whole friend data array and calculates the difference of each friend's score =====================
		for(var i = 0; i < friendData.length; i++){

			var friendScore = (friendData[i].scores);

			var totalDifference = 0

			for(var k = 0; k < newFriend.length; k++){

				var diff = Math.abs(friendScore[k] - newFriend[k]);

				totalDifference += diff;
			}

			console.log("Difference for " + i + " is " + totalDifference);

			friendScoreDiffs.push(totalDifference);

		}

		//This calculates which is the best friend ===============================================
		var lowest = 0; 

		for(var j = 0; j < friendScoreDiffs.length; j++){

			if(friendScoreDiffs[j] <= friendScoreDiffs[lowest]){
				lowest = j; 
			}
		}

		console.log("the best friend index is: " + lowest);


		//this will send the BEST FRIEND MATCH to ajax .post ...function(DATA)
		res.json(friendData[lowest]);

	});

}
