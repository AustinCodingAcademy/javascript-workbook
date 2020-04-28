console.log("Loaded todo.js file");
//when the add button gets clicked
// append the text to the bottom of the list
    // add a new list item
let addButton = document.getElementById('addButton');
addButton.addEventListener('click', function(){

    let inputElement = document.getElementById('inputText');
    let todoText = inputElement.value;
    inputElement.value = '';
    let li = document.createElement('li');
    let span =document.createElement('span');
    span.innerText = todoText;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('delete');

    let ul =document.querySelector('ul');
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteButton);
    setupDeleteEvent(deleteButton);
    setupSpanEvent(span);
})

// when a delete button get clicked
// delete its parent list item

let allDeletes = document.querySelectorAll('.delete');
for(let i=0; i<allDeletes.length; i++) {
    let deleteButton = allDeletes[i];
    setupDeleteEvent(deleteButton);
}

function setupDeleteEvent(deleteButton) {
    deleteButton.addEventListener('click', function(){
       console.log("delete got clicked, parent li is", deleteButton.parentElement);
       let parentLi = deleteButton.parentElement;
       parentLi.remove();
    })
}
// when span is clicked
// class done should be added to it

let allSpans = document.querySelectorAll('span');
//console.log("All spans", allSpans)
for(let i=0; i<allSpans.length; i++) {
    let span = allSpans[i];
    setupSpanEvent(span);
    }


function setupSpanEvent(span) {
    span.addEventListener('click', function(event){
        console.log("this span got clicked", event)
        span.classList.toggle("done");
    })
}