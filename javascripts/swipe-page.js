define(function(require) {
	var $ = require("jquery");
	var sortUserData = require("sort-user-data");
	var allUserData = require("allUserData");
	var makeArray = require("make-array");

	var swipeViewArray;
	var counter = 0;
	var randomizedUserArray;

	// getting data from firebase and converting to array
	allUserData()
		.then(function(data) {
			var array = makeArray.convertToArray(data);
			randomizedUserArray = sortUserData.sortData(array);
			console.log("randomizedUserArray", randomizedUserArray);
			swipeViewArray = randomizedUserArray;
	
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
	    	var nextuser = randomizedUserArray[counter];
	    	require(["hbs!../templates/swipe-page"], function(template) {
		        $("#swipe-view").html(template(nextuser));
		    });
	    });

	    $("#like-button").click(function() {
	    	console.log("you clicked right/like");

	    	var liked_user_key = randomizedUserArray[counter].key;
	    	console.log("liked user key", liked_user_key);





	    	counter += 1;
	    	var nextuser = randomizedUserArray[counter];
	    	require(["hbs!../templates/swipe-page"], function(template) {
		        $("#swipe-view").html(template(nextuser));
		    });
	    });
});




