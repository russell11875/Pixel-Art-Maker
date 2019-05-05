// Select color input
// Select size input
var height, width, color;


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputwidth').val();
    makeGrid(height,width);
    //console.log('Height:' + height + ' and width: ' + width);
})
// A grid should appear when you enter an number into the width, height, and the user selects submit button.
function makeGrid(x,y) {
    $('tr').remove();

    // this will create table
    for (var i = 1; i <= x; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= x; j++) {
            $('#table' + i).append('<td></td>');
        }
    } 
    
    //adds or removes color to or from the table
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
