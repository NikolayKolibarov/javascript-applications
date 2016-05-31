/**
 * Created by NikolayNK on 12.3.2016 г..
 */
var app = app || {};

(function (scope) {
    function deleteItem(username, password, collection, id) {
        $.ajax({
            url: "https://baas.kinvey.com/appdata/kid_ZJ6cQU-U1W/" + collection + "/" + id,
            type:"DELETE",
            data:"application, json",
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
    scope.deleteItem = deleteItem;
})(app);