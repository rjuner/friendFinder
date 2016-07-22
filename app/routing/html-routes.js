// ==============================================
// DEPENDENCIES 
// ++++++++++++++++++++++++++++++++++++++++++++++
var path = require('path'); 


// ==============================================
// ROUTING 
// ++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(app){

	//should display the survey page
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});


	//should lead back to the home page
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}

