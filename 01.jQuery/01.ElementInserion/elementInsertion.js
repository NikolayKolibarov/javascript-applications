/**
 * Created by NikolayNK on 1.3.2016 г..
 */

$(document).ready(function() {
    var elementToAddBefore = $('<li>').text('elementToAddBefore'),
        elementToAddAfter = $('<li>').text('elementToAddAfter');

    $('#target')
        .before(elementToAddBefore)
        .after(elementToAddAfter);
});
