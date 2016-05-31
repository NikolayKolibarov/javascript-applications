/**
 * Created by NikolayNK on 16.3.2016 г..
 */

var app = app || {};

(function (scope) {
    scope.router = Sammy(function () {
        var selector = $('#wrapper');

        this.get('#/Nikolay', function () {
            $(selector).html('<h2>Hello, Nikolay!</h2>');
        });

        this.get('#/Aaron', function () {
            $(selector).html('<h2>Hello, Aaron!</h2>');
        });

        this.get('#/Hitler', function () {
            $(selector).html('<h2>Hello, Hitler!</h2>');
        });

        this.get('#/Musolini', function () {
            $(selector).html('<h2>Hello, Musolini!</h2>');
        });

        this.get('#/Ceci', function () {
            $(selector).html('<h2>Hello, Ceci!</h2>');
        });
    });

    app.router.run();
})(app);