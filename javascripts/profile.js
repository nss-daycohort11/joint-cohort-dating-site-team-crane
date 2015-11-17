define(function(require) {
  var $ = require("jquery");

  var profileImg = ""; // img URL
  var name = ""; // populate from login
  var furryName = "";
  var age = 0;
  var gender = "";
  var species = "";
  var bio = "";
  var profileData = {};

  $(".save-profile").click(function(event) {

    profileData = {
      "picture": $(".profile-pic").attr("src"),
      "name": $("[name=name]").val(),
      "furryName": $("[name=furry-name]").val(),
      "age": $("[name=age]").val(),
      "gender": $("[name=gender]").val(),
      "species": $("[name=species]").val(),
      "bio": $("[name=bio]").val(),
      "matches": [],
      "likedby": []
    };  
    console.log("profileData",profileData);
  });


});