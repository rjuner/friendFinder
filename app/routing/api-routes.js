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

		var newFriend = req.body.scores;

		for(var i = 0; i < friendData.length; i++){

			var friendScore = (friendData[i].scores);
			console.log("friend " + i + "'s array: ");

			var totalDifference = 0

			for(var k = 0; k < newFriend.length; k++){

				var diff = Math.abs(friendScore[k] - newFriend[k]);

				totalDifference += diff; 

				//console.log(diff);

			}

			console.log(totalDifference);


		}

		//this will send the BEST FRIEND MATCH to ajax .post ...function(DATA)
		res.json(friendData[0]);

	});

}
