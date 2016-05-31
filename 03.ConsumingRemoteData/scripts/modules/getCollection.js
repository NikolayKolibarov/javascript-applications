/**
 * Created by NikolayNK on 14.3.2016 г..
 */

var app = app || {};

(function (scope) {
    function getCollection(username, password, collection, url) {
        return $.ajax({
            url: url + '/' + collection,
            method: "Get",
            contentType: "json",
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    scope.getCollection = getCollection;
})(app);