define(function(require) {
	var $ = require("jquery");

	return {
		convertToArray: function(usersObject) {
			var newArray = [];

			for (var key in usersObject) {
				var usersArray = usersObject[key];
				usersArray.key = key;
				newArray[newArray.length] = usersArray;
			}

			return newArray;

		}
	};
});