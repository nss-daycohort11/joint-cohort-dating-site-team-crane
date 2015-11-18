define(function(require) {
	var $ = require("jquery");
	var sortUserData = require("sort-user-data");
	var allUserData = require("allUserData");
	var makeArray = require("make-array");
	var login = require("login");
	var getId = require("getUserId");

	var counter = 0;
	var randomizedUserArray;

	var currentUserId;
	var currentUserData;
	var userData;

	getId()
	.then(function(data) {
		currentUserId = data;
    	var thisuserId = data.split(":");
		var thisuserDataRef = "https://funwithfurries.firebaseio.com/facebook%3A" + thisuserId[1];
		// console.log("thisuserDataRef", thisuserDataRef);
		userData = new Firebase(thisuserDataRef);

		userData.on("value", function(snapshot) {
			currentUserData = snapshot.val();
			console.log("currentUserData", currentUserData);

			// getting data from firebase and converting to array
			allUserData()
			.then(function(data) {
				var array = makeArray.convertToArray(data);
				randomizedUserArray = sortUserData.sortData(array);
				var firstobject = randomizedUserArray[counter];

		        require(["hbs!../templates/swipe-page"], function(template) {
			        $("#swipe-view").html(template(firstobject));
			    });
			})
			.fail(function(error) {
				console.log("error", error);
			});


		    $("#reject-button").click(function() {
		    	//console.log("you clicked left/reject");
		    	counter += 1;
		    	// moves counter to show next array object
		    	var nextuser = randomizedUserArray[counter];
	    		require(["hbs!../templates/swipe-page"], function(template) {
			        $("#swipe-view").html(template(nextuser));
	    		});
		    });


		    $("#like-button").click(function() {
		    	//console.log("you clicked right/like");
		    	var liked_user = randomizedUserArray[counter];
		    	
		    	var otheruserId = liked_user.key.split(":");
		    	//console.log(otheruserId);
				var otheruserDataRef = "https://funwithfurries.firebaseio.com/facebook%3A" + otheruserId[1];
				// console.log("otheruserDataRef",otheruserDataRef);
				var otheruserData = new Firebase(otheruserDataRef);
				// console.log("currentUserId", currentUserId);
		    	otheruserData.child("likedby").push(currentUserId);

		    	// // for finding matches
		    	for (var id in currentUserData.likedby) {
		    		var likedBYuser = currentUserData.likedby[id];
			    	if (liked_user.key === likedBYuser) {
			    		//console.log("there's a match!");
			    		// console.log("liked user key", liked_user.key);
			    		console.log("LIKED USER", otheruserData);
			    		otheruserData.child("matches").push(currentUserId);
			    		console.log("currentUserData matches", userData.child);
			    		userData.child("matches").push(liked_user.key);
			    	}
		    	}

		    	counter += 1;
		    	var nextuser = randomizedUserArray[counter];
		    	require(["hbs!../templates/swipe-page"], function(template) {
				    $("#swipe-view").html(template(nextuser));
			    });
		    });
		}); // end snapshot.on function
	});
	
});




