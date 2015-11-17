define(function(require) {
	var $ = require("jquery");
	var getId = require("getUserId");

	var currentUser = getId();
	var currentUserRef = "https://funwithfurries.firebaseio.com/" + currentUser;
 	var currentUserData = new Firebase(currentUserRef);

	return {
		sortData: function(userArray) {
			console.log("entered sort data");
			var currentIndex = userArray.length, temporaryValue, randomIndex ;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

			   // Pick a remaining element...
			   randomIndex = Math.floor(Math.random() * currentIndex);
			   currentIndex -= 1;

			   // And swap it with the current element.
			   temporaryValue = userArray[currentIndex];
			   userArray[currentIndex] = userArray[randomIndex];
			   userArray[randomIndex] = temporaryValue;
			}

			userArray.filter(function(el) {
				return el.key !== currentUserData.key;
			});

			return userArray;
		}
	};
});