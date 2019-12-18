'use strict'
//For Loop

for (let q = 0; q <= 10; q++) {
    console.log(q)
}

//Print all even numbers between 0 and 12
for (let i=0; i<=12; i+=2) {
    console.log(i);
}

//While Loop
let m=10;
while (m>=0) {
    console.log(m);
    m--;
}

let n=0;
while (n>=10) {
    console.log(n);
    n++;
}

//Do...While Loop
let p=1;
do {
    console.log(p*3);
    p++;
} while (p<10);

//For Each

let groceries = ['banana', 'apples', 'orange', 'kiwi', 'strawberry'];

groceries.forEach(function(val, index) {
    console.log(val);
});

let x = 5;

function isTrue() {
    if (x === 5) {
        return true;
    } else {
        return false;
    }
}

console.log(isTrue());