var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects["viewAlt"] = false; //if false
  	response.render('index', projects);
};

exports.viewAlt = function(request, response){
	projects["viewAlt"] = true; //if true then have little like button
  	response.render('index', projects);
};