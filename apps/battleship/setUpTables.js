//this sets up the two tables the game will be played on.
var $table = $('<table id = "myboard"></table');

//sets up table 1 by looping throgh and printing the appropriate html elements
for (i = 0; i < 10; i++) {

    var $rowTr = $('<tr id = "row"' + i + '></tr>');
    for (j = 0; j < 10; j++) {
        $tempString = $('<td class="innerRow" id = "' + j + ',' + i + '">-</td>');
        $rowTr.append($tempString);
    }
    $table.append($rowTr);
}
//add the table
$("body").append($table);

//sets up table 2
var $table = $('<table id = "myshots"></table');

for (i = 0; i < 10; i++) {

    var $rowTr = $('<tr id = "shotrow"' + i + '></tr>');
    for (j = 0; j < 10; j++) {
        $tempString = $('<td class="innerShotRow" id = "S' + j + ',' + i + '">-</td>');
        $rowTr.append($tempString);
    }
    $table.append($rowTr);
}
$("body").append($table);