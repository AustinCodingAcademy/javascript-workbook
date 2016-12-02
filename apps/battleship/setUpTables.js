var $table = $('<table id = "myboard"></table');

for (i=0;i<10;i++){
  
    var $rowTr = $('<tr id = "row"'+i+'></tr>');
    for (j=0;j<10;j++){
        $tempString = $('<td class="innerRow" id = "'+j+','+i+'">-</td>');
        $rowTr.append($tempString);
    }
    $table.append($rowTr);
}    
$("body").append($table);

var $table = $('<table id = "myshots"></table');

for (i=0;i<10;i++){
  
    var $rowTr = $('<tr id = "shotrow"'+i+'></tr>');
    for (j=0;j<10;j++){
        $tempString = $('<td class="innerShotRow" id = "S'+j+','+i+'">-</td>');
        $rowTr.append($tempString);
    }
    $table.append($rowTr);
}    
$("body").append($table);