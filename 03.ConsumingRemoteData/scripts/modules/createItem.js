/**
 * Created by NikolayNK on 14.3.2016 г..
 */

var app = app || {};

(function (scope) {
    function createItem(username, password, collection, url, content) {
        $.ajax({
            url: url + '/' + collection,
            method: "Post",
            contentType: "json",
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            data: JSON.stringify(content),
            error: function (error) {
                console.log(error);
            }
        });
    }

    scope.createItem = createItem;
})(app);