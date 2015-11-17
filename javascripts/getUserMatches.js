define(function(require) {
    var q = require("q");
    var firebase = require("firebase");
    var userId = require("getUserId");

    var uid = userId();
    //console.log(uid);

    return function () {

        var deferred = q.defer();
        // URL endpoint ..../matches won't work yet
        var ref = new Firebase('https://funwithfurries.firebaseio.com/' + uid + '/matches/');
        ref.on('value', function (snapshot) {
            deferred.resolve(snapshot.val());
        });

        return deferred.promise;
    };
});