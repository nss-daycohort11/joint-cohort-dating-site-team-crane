define(function(require) {
  var chatPartner = "facebook:4222601334329";
  return {
    getChatPartner: function() {
      return chatPartner;
    },
    setChatPartner: function(uid) {
      ref.child('conversations').child(chatPartner).off();
      chatPartner = uid;
      ref.child('conversations').child(chatPartner).on('value', function(snapshot) {
        var messages = snapshot.val();
        require(['hbs!../templates/chat'], function(chatTemplate) {
          $("#chatBox").html(chatTemplate(messages));
        });
      });
    }
  }
});
