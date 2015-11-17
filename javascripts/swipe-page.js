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

	getId()
	.then(function(data) {
		var userID = data;
		console.log("REAL USERID", userID);
	    var userDataRef = "https://funwithfurries.firebaseio.com/" + userID;
		// console.log("userDataRef",userDataRef);
		var userData = new Firebase(userDataRef);
		// console.log("userData", userData.child("picture"));

		userData.on("value", function(snapshot) {
			// console.log("FUCKING SNAPSHOT", snapshot.val());
			currentUserData = snapshot.val();

			// getting data from firebase and converting to array
			allUserData()
			.then(function(data) {
				var array = makeArray.convertToArray(data);
				randomizedUserArray = sortUserData.sortData(array);
		
				var firstobject = randomizedUserArray[counter];
				//console.log("firstobject", firstobject);

		        require(["hbs!../templates/swipe-page"], function(template) {
			        $("#swipe-view").html(template(firstobject));
			    });
			})
			.fail(function(error) {
				console.log("error", error);
			});


		    $("#reject-button").click(function() {
		    	//console.log("you clicked left/reject");
		    	$('.avatar').addClass('rotate-left');
		    	counter += 1;
		    	// moves counter to show next array object
		    	var nextuser = randomizedUserArray[counter];
		    	
	    		require(["hbs!../templates/swipe-page"], function(template) {
	    			setTimeout(function () {
				        $("#swipe-view").html(template(nextuser));
				    }, 1500);
	    		})
		    	
		    });

		    $("#like-button").click(function() {
		    	//console.log("you clicked right/like");
		    	$('.avatar').addClass('rotate-right');
		    	var liked_user = randomizedUserArray[counter];
		    	//console.log("liked user", liked_user);
		    	//console.log("currentUserData key", currentUserId);
		    	
		    	var otheruserId = liked_user.key.split(":");
		    	//console.log(otheruserId);
				var otheruserDataRef = "https://funwithfurries.firebaseio.com/facebook%3A" + otheruserId[1];
				console.log("userDataRef",userDataRef);
				var otheruserData = new Firebase(otheruserDataRef);

		    	otheruserData.child("likedby").push(currentUserId);
		    	//console.log("liked_user is likedby", liked_user);
		    	//console.log("CHECK MATCHES:", userData);

		    	// // for finding matches
		    	for (var id in userData.likedby) {
		    		// console.log("%%%%%%%", currentUserData.likedby[id]);
		    		var likedBYuser = userData.likedby[id];
			    	if (liked_user.key === likedBYuser) {
			    		//console.log("there's a match!");
			    		otheruserData.child("matches").push(currentUserId);
			    		userData.child("matches").push(liked_user.key);
			    		//console.log("liked_user.matches", liked_user);
			    		//console.log("currentuser.matches", userData);
			    	}
		    	}

		    	counter += 1;
		    	var nextuser = randomizedUserArray[counter];
		    	require(["hbs!../templates/swipe-page"], function(template) {
			        setTimeout(function () {
				        $("#swipe-view").html(template(nextuser));
				    }, 1500);
			    });
		    });
		}); // end snapshot.on function
	});
	
});




