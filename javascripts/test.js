define(function(require) {
	var $ = require("jquery");


	//toggle function to show/hide sidebar
	$("#menu-toggle").click(function(e) {
		console.log("you clicked");
	    e.preventDefault();
	    $("#wrapper").toggleClass("toggled");
	    $("#menu-toggle").toggleClass("button-toggled");
	});
});