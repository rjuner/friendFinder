// ==============================================
// LOADING DATA  
// ++++++++++++++++++++++++++++++++++++++++++++++
var friendData 	= require('../data/friends.js');
var path 		= require('path');


// ==============================================
// ROUTING 
// ++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(app){

	//when users visit 'api/friends/' they should get the JSON data
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});
	
}