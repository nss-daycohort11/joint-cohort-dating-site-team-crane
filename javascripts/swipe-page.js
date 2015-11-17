define(function(require) {
	var $ = require("jquery");
	var sortUserData = require("sort-user-data");
	var allUserData = require("allUserData");
	var makeArray = require("make-array");

	var swipeViewArray;

	// getting data from firebase and converting to array
	allUserData()
		.then(function(data) {
			var array = makeArray.convertToArray(data);
			var randomizedUserArray = sortUserData.sortData(array);
			console.log("randomizedUserArray", randomizedUserArray);
			swipeViewArray = randomizedUserArray;
			var firstobject = randomizedUserArray[0];
			console.log("firstobject", firstobject);

	        require(["hbs!../templates/swipe-page"], function(template) {
		        $("#swipe-view").html(template(firstobject));
		    });
			
		})
		.fail(function(error) {
			console.log("error", error);
		});

});