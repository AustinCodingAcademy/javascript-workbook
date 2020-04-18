let addButton = document.getElementById("add");
addButton.addEventListener('click', function(){
//read the value from the input box
  let inputElement = document.getElementById('inputText');
  let toDoText = inputElement.value;
  inputElement.value = '';
  //create li element
  let li = document.createElement("li");
  //create span element
  let span = document.createElement("span");
  //update inner text of span element
  span.innerText = toDoText;
  //create delete button
  let deleteButton = document.createElement('button');
  //update inner text of delete button
  deleteButton.innerText = 'delete';
  //add class to the delete button
  deleteButton.classList.add("delete");
  //add li to bottom of ul element
  let ul = document.querySelector('ul');
  ul.appendChild(li);
  //add span and delete button as children of newly created li
  li.appendChild(span);
  setupSpanEvent(span);
  li.appendChild(deleteButton);
  setupDeleteEvent(deleteButton);
})

let allDeletes = document.querySelectorAll(".delete");
for(let i = 0; i < allDeletes.length; i++){
  let deleteButton = allDeletes[i];
  setupDeleteEvent(deleteButton);
}

function setupDeleteEvent(deleteButton){
  deleteButton.addEventListener('click', function(){
   let parentLi = deleteButton.parentElement;
    parentLi.remove();
   //let parentUl = parentLi.parentElement;
   //parentUl.removeChild(parentLi);
});
}

let allSpans = document.querySelectorAll("span");
for(let i = 0; i<allSpans.length; i++){
  let span = allSpans[i];
  //span.addEventListener('click', function(){
   setupSpanEvent(span); 
  } 

//this function adds click event to the span
function setupSpanEvent(span){
  span.addEventListener('click', function(){
    console.log("this span got clicked", span);
    span.classList.toggle("done");
  })
}