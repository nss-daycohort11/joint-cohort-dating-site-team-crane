define(function(require) {
	var $ = require("jquery");
	var routing = require("routing");
	var swipe = require("swipe-page");

	var counter = 0;

	$("#dynamic-views").hide();

	//toggle function to show/hide sidebar
	$("#menu-toggle").click(function(e) {
		console.log("you clicked");
	    e.preventDefault();
	    $("#wrapper").toggleClass("toggled");
	    $("#menu-toggle").toggleClass("toggled");
	    $("#menu-toggle").toggleClass("menu-toggle");
	});

	//sidebar button handlers
	$("#view-profile").click(function(e) {
		console.log("clicked view profile");
		routing.goTo("profile");
	});

	$("#view-matches").click(function(e) {
		console.log("clicked view matches");
		routing.goTo("matches");
	});

	$("#view-discover").click(function(e) {
		console.log("clicked view discover");
		routing.goTo("discover");
	});


});