define(function(require) {
  var $ = require('jquery');
  var routing = require('routing');
  var f = require('firebase');
  var chatPartner = require('chat-partner');
  var getUid = require('getUserId');

  var uid;
  var ref;
  var partner = chatPartner.getChatPartner();

  getUid().then(function(data) {
    uid = data;
    ref = new Firebase("https://funwithfurries.firebaseio.com/" + uid);
  });

  $("#chatInput").keypress(function(e) {
    if(e.which == 13) {
      ref.child('conversations').child(partner).push({
        body: $("#chatInput").val(),
        sender: uid
      });
      $("#chatInput").val("");
    }
  });
});
