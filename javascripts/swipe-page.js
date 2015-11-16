define(function(require) {
	var $ = require("jquery");
	var dummyObject = require("dummyobject");

	return {
		populateSwipePage: function(userObject) {

			console.log("user object", userObject);

	        require(["hbs!../templates/swipe-page"], function(template) {
	            $("#swipe-view").html(template(userObject));
	        });
			
		}
	};

});