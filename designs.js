// Select color input
// Select size input
var stand, run, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    stand = $('#inputHeight').val();
    run = $('#inputWeight').val();
    makeGrid(stand, run);
    console.log('height: ' + stand + ' and width: ' + run);
})


// remove an existing gri and replace with new selection
function makeGrid(a, b) {
    $('tr').remove();

    // Your code goes here!
    for (var i = 1; i <= a; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= b; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //add color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        //add and remove color from same cell
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}