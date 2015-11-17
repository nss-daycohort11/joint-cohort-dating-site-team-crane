define(function(require) {
    var q = require("q");
    var firebase = require("firebase");

    return function () {

        var deferred = q.defer();
        var ref = new Firebase("https://funwithfurries.firebaseio.com/");
        ref.on('value', function (snapshot) {
            deferred.resolve(snapshot.val());
        });

        return deferred.promise;
    };
});