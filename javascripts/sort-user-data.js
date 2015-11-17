define(function(require) {
	var $ = require("jquery");

	return {
		sortData: function(userArray) {
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

			return userArray;
		}
	};
});