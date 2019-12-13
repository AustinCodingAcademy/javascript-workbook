// ========= for loops ==========




for (var i=0; i<=10; i++){
    console.log(i);
}

console.log("===================");

for (let i=0;i<13;i+=2){
    console.log(i);
}

console.log("===================");


for (let i=0; i<13;i++){
    if(i % 2 == 0) {
        console.log(i);
    }
}
// =============infiniate loop example =============
// for (let i=0;;i++){
//     console.log(i);
// }




// ========= for each loops



// ========= while loops
// ========= print every number between 0 and 10

console.log("Now we are working on while loops");

let b=0;
while(b<=10){
    console.log(b);
    b++;
}

// ==========  Print backwards fro 10 ============
console.log("now print backwards with a while loop");

let c=10;
while(c>=0){
    console.log(c);
    c--;
}


// ========= and do while loops

// do {
// //ask for social
// } while(

// )

console.log("do while");

let j=0;
do {
    console.log(j);
    j++
} while(j<=10);


// =========== for each ==============
// === is specific to Arrays ========

console.log("for each");

let items = ["bananas", "apples", "kiwi", "orange", "strawberry"];

// for each (item in items) {
//     console.log(item);
// }


items.forEach(fuction(val, index){
    console.log(val);
})

for(let t=0;)