function cellTemplate(rowNum, cellNum){
    var isCelleven = true;
    var isRowEven = true
    if (cellNum % 2 == 1) isCelleven = false;
    if (rowNum  % 2 == 1) isRowEven = false
    
    if(isCelleven != isRowEven) {
      let cellString = ` <div class="bp"></div>`
      
        return `
            <div id="cell-1-${celNum}"class= "row red" </div>
        `
    } else 
    return ` <div id="cell-1-${celNum}" class="row red">`
}

function rowTemplate(rowNum){
    var rowString = ''
    rowString = rowString + `<div class="col 1"> `
}