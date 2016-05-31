/**
 * Created by NikolayNK on 11.3.2016 г..
 */
var app = app || {};

(function (scope) {
    function getCollection(username, password, collection) {
        return $.ajax({
            url: "https://baas.kinvey.com/appdata/kid_ZJ6cQU-U1W/" + collection,
            type: "Get",
            dataType: "json",
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