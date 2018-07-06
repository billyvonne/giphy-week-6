$(function() {
    populateButtons(topics, 'searchButton', '#buttonsArea')
    console.log("Page loaded!");
})

var topics = ['Science', 'Bill Nye', 'Biology'];

function populateButtons(topics, classToAdd, areaAdded) {
    $(areaAdded).empty();
    for(var i=0; i<topics.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', topics[i])
        a.text(topics[i]);
        $(areaAdded).append(a);
    }
}

$(document).on('click','.searchButton', function(){
    var type = $(this).data('type');
    var queryURL = ""
})