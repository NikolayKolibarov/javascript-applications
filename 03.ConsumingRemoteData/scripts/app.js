/**
 * Created by NikolayNK on 14.3.2016 г..
 */

var app = app || {};

(function (scope) {
    var username = 'niki',
        password = '1234',
        appId = 'kid_W1ZyjJxuk-',
        baseUrl = 'https://baas.kinvey.com/',
        url = baseUrl + 'appdata/' + appId,
        books = 'books';

    $('#displayBooks').click(function () {
        var wrapper = $('#wrapper');
        wrapper.empty();
        var resultDiv = $('<div>');
        var h1 = $('<h1>').text('All books in collection: ');
        resultDiv.append(h1);

        scope.getCollection(username, password, books, url).then(function (data) {
            data.forEach(function (item) {
                var bookDiv = $('<div>').attr('id', 'book').css('border', '1px solid black'),
                    bookTitle = $('<h2>').text("Title: " + item.title),
                    bookAuthor = $('<h2>').text("Author: " + item.author),
                    bookIsbn = $('<h2>').text("ISBN: " + item.isbn);
                bookDiv.append(bookTitle).append(bookAuthor).append(bookIsbn);
                resultDiv.append(bookDiv);
            });
        });
        wrapper.append(resultDiv);

    });

    $('#addBook').click(function () {
        var bookTitle = $('#bookTitle');
        scope.createItem(username, password, books, url, {title: bookTitle.val()});
    });

})(app);