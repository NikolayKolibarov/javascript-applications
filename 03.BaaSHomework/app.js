/**
 * Created by NikolayNK on 11.3.2016 г..
 */
var app = app || {};

(function (scope) {
    var username = 'niki',
        password = '1234',
        countries = 'countries',
        towns = 'towns';

    $('#getCountriesButt').click(function () {
        $('#wrapper').load('partial/listCountries.html', function () {

            scope.getCollection(username, password, countries).then(function (data) {
                var count = 0;
                data.forEach(function (item) {
                    count++;
                    var div = $("<div>").attr('id', 'country');
                    var name = $("<h3>").text(item.name);
                    var deleteButton = $("<button>Delete</button>").attr('id', count);
                    deleteButton.on('click', function () {
                        scope.deleteItem(username, password, countries, item._id);
                    });
                    var editCountryButton = $("<button>Edit</button>").attr('id', count);
                    editCountryButton.click(function () {
                        div.load('partial/editCountry.html', function () {
                            $('#editNameButt').click(function () {
                                var editItemInput = $("#editName").val();
                                scope.editItem(username, password, countries, item._id, {
                                    name: editItemInput
                                });
                            });
                        });
                    });
                    var showTownsButton = $('<button>Show towns</button>').attr('id', count);
                    showTownsButton.click(function () {
                        scope.getCollection(username, password, towns).then(function (data) {
                            data.forEach(function (town) {
                                var filter = town.country._id == item._id;
                                if (filter) {
                                    var townsDiv = $('<div>').attr('id', 'town');

                                    var deleteTownButton = $('<button>Delete</button>');
                                    deleteTownButton.click(function() {
                                        scope.deleteItem(username, password, towns, town._id);
                                    });

                                    var editTownButton = $('<button>Edit</button>');
                                    editTownButton.click(function () {
                                        townsDiv.load('partial/editTown.html', function () {
                                            $('#editTownButton').click(function () {
                                                var newTownName = $('#editTownInput').val();
                                                scope.editItem(username, password, towns, town._id, {
                                                    name: newTownName,
                                                    country: town.country
                                                })
                                            });

                                        });
                                    });

                                    var townName = $('<h3>').text(town.name);
                                    townsDiv.append(townName);
                                    townsDiv.append(deleteTownButton);
                                    townsDiv.append(editTownButton);
                                    div.append(townsDiv);
                                }
                            });
                        })
                    });

                    var addTownButton = $('<button>Add town</button>').attr('id', count);
                    addTownButton.click(function () {
                        div.load('partial/addTown.html', function () {
                            $('#addTownButton').click(function () {
                                var addTownInput = $('#townName').val();
                                scope.addItem(username, password, towns, {
                                    "name": addTownInput,
                                    "country": {
                                        "_type": "KinveyRef",
                                        "_id": item._id,
                                        "_collection": towns
                                    }
                                })
                            });
                        });
                    });


                    /*Append*/
                    div.append(name).append(deleteButton).append(editCountryButton).append(showTownsButton).append(addTownButton);
                    var result = $('#countries').append(div);
                    $('#wrapper').append(result);
                });
            });
        });
    });

    $('#addCountryButt').click(function () {
        var countryName = $('#countryName').val();
        scope.addItem(username, password, countries, {name: countryName});
    })
})(app);