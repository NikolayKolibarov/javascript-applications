/**
 * Created by NikolayNK on 12.3.2016 г..
 */

app = app || {};

(function (scope) {
    function addItem(username, password, collection, item) {
        $.ajax({
            url: "https://baas.kinvey.com/appdata/kid_ZJ6cQU-U1W/" + collection,
            type: "Post",
            dataType: 'json',
            headers: {
                "Authorization" : "Basic " + btoa(username + ":" + password)
            },
            data: item,
            error: function(error) {
                console.log(error);
            }

        });
    }

    scope.addItem = addItem;
})(app);
