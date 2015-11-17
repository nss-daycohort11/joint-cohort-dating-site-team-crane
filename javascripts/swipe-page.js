define(function(require) {
	var $ = require("jquery");
	var sortUserData = require("sort-user-data");
	var allUserData = require("allUserData");
	var makeArray = require("make-array");
	var login = require("login");
	var getId = require("getUserId");

	var counter = 0;
	var randomizedUserArray;

	var currentUser = getId();
	var currentUserRef = "https://funwithfurries.firebaseio.com/" + currentUser;
 	var currentUserData = new Firebase(currentUserRef);

	// getting data from firebase and converting to array
	allUserData()
		.then(function(data) {
			var array = makeArray.convertToArray(data);
			randomizedUserArray = sortUserData.sortData(array);
	
			var firstobject = randomizedUserArray[counter];
			console.log("firstobject", firstobject);

	        require(["hbs!../templates/swipe-page"], function(template) {
		        $("#swipe-view").html(template(firstobject));
		    });
		})
		.fail(function(error) {
			console.log("error", error);
		});


	    $("#reject-button").click(function() {
	    	console.log("you clicked left/reject");
	    	counter += 1;
	    	// moves counter to show next array object
	    	var nextuser = randomizedUserArray[counter];
	    	require(["hbs!../templates/swipe-page"], function(template) {
		        $("#swipe-view").html(template(nextuser));
		    });
	    });

	    $("#like-button").click(function() {
	    	console.log("you clicked right/like");

	    	var liked_user = randomizedUserArray[counter];
	    	console.log("liked user", liked_user);
	    	liked_user.likedby = currentUserData.key; // pushing current user key to liked user's likedby array
	    	console.log("liked_user is likedby", liked_user.likedby);

	    	// if ( liked_user.key === 
	    	// 	liked_user.matches += currentuser.key;
	    	// 	currentuser.matches += liked_user.key;

	    	// // for finding matchess
	    	// for(var id in currentUserData.likedby) {
	    	// 	console.log(id, " ------ likes you");
	    	// }

	    	counter += 1;
	    	var nextuser = randomizedUserArray[counter];
	    	require(["hbs!../templates/swipe-page"], function(template) {
		        $("#swipe-view").html(template(nextuser));
		    });
	    });
});




