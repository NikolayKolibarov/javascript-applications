/**
 * Created by NikolayNK on 25.2.2016 г..
 */
$(document).ready(function() {
    function paintElements() {
        var classInput = $('#class'),
            className = classInput.val(),
            color = $('#color').val(),
            elementsToPaint = $('.' + className);

        elementsToPaint.css('background-color', color);
        classInput.val('');
    }

    $('.paintButt').click(paintElements);
});

