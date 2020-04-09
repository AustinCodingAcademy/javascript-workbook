

let allSpans = document.querySelectorAll("span");
for(let i = 0; i<allSpans.length; i++){
  let span = allSpans[i];
  span.addEventListener('click', function(){
   
  })
}

setupSpanEvent(span){
  span.addEventListener('click', function())
  console.log("this span got clicked", span);
  span.classList.toggle("done");
}