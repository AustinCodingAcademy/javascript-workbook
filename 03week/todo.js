console.log("loaded todo.js file")

let addButton = document.getElementById("addButton");
addButton.addEventListener('click', function() {
  //console.log("clicked the add button");
  let inputElement = document.getElementById('inputText');
  let todoText = inputElement.value;
  inputElement.value = '';

  let li = document.createElement('li');

  let span = document.createElement('span');
  span.innerText = todoText;

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  deleteButton.classList.add('delete');

  let ul = document.querySelector('ul');
  ul.appendChild(li)

  li.appendChild(span);
  setupSpanEvent(span);
  li.appendChild(deleteButton);
  setupDeleteEvent(deleteButton);
})

let allDeletes = document.querySelectorAll('.delete');
  for(let i=0; i<allDeletes.length; i++) {
    let deleteButton = allDeletes[i];
    setupDeleteEvent(deleteButton);
}


function setupDeleteEvent(deleteButton) {
  deleteButton.addEventListener('click', function(){
    console.log("Delete got clicked, parent li is", deleteButton.parentElement);
    let parentLi = deleteButton.parentElement;
    parentLi.remove();
  });
}


let allSpans = document.querySelectorAll("span");

  for(let i=0; i<allSpans.length; i++) {
    let span = allSpans[i];
    setupSpanEvent(span);
  }

function setupSpanEvent(span) {
  span.addEventListener('click', function () {
    console.log("this span got clicked", span);
    span.classList.toggle("done");
  })
}