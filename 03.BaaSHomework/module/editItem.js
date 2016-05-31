/**
 * Created by NikolayNK on 12.3.2016 г..
 */

var app = app || {};

(function (scope) {
    function editItem(username, password, collection, id, newItem) {
        $.ajax({
            url: 'https://baas.kinvey.com/appdata/kid_ZJ6cQU-U1W/' + collection + '/' + id,
            type: 'Put',
            dataType: 'json',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            },
            data:  newItem,
            error: function(error) {
                console.log(error);
            }
        })
    }

    scope.editItem = editItem;
})(app);