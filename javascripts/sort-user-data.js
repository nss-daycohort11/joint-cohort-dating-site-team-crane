define(function(require) {
	var $ = require("jquery");
	var getId = require("getUserId");

	var currentUserId;

	getId()
		.then(function(data) {
			// console.log("data--------", data);
			currentUserId = data;
		});

	return {
		sortData: function(userArray) {
			// console.log("entered sort data");
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

			userArray = userArray.filter(function(el) {
				// console.log("el key", el.key);
				// console.log("does it match uid", currentUserId);
				return el.key !== currentUserId;
			});
			// console.log("NEW userArray", userArray);

			return userArray;
		}
	};
});