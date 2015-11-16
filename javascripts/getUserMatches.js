define(function(require) {
    var q = require("q");
    var firebase = require("firebase");
    var userId = require("getUserId");

    var uid = userId();
    //console.log(uid);

    return function () {

        var deferred = q.defer();
        var ref = new Firebase('https://funwithfurries.firebaseio.com/' + uid + '/name/');
        ref.on('value', function (snapshot) {
            deferred.resolve(snapshot.val());
        })

        return deferred.promise
    };
});