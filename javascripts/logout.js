define(function(require) {
  var f = require('firebase');
  var $ = require('jquery');
  var routing = require('routing');

  var ref = new Firebase("https://funwithfurries.firebaseio.com");

  $("#log-out").click(function() {
    ref.unauth();
    $("#menu-toggle").toggleClass("toggled");
    routing.goTo("login");
  });

});
