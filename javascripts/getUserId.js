define(function(require) {
    var q = require("q");
    var firebase = require("firebase");
    
    return function () {

        var deferred = q.defer();
        var ref = new Firebase("https://funwithfurries.firebaseio.com/");
        var authData = ref.getAuth();
        if (authData) {
            console.log("Authenticated user with uid:", authData.uid);
            deferred.resolve(authData.uid);
        }

        return deferred.promise;
    };
});