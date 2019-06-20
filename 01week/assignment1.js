'use strict'

//display the current date and time
function dateAndTime() {
    let vision = new Date();
    document.getElementById('getDate').innerHTML = vision;
    console.log('a button was clicked');
};


//convert a number to a string
function numberToString(){
    let num = 33;
    let g = num.toString();
    document.getElementById('getIt').innerHTML = g;
};


//convert a string to the number
function stringToNumber(){
    let uhoh = 99;
    document.getElementById('getNumbers').innerHTML = Number(uhoh);
};

// //create a program that displays the type of variable

// //boolean
function booleanType(){
    let waterIsGewd = true;
    document.getElementById('getBool').innerHTML = '<code>"let thisVariable = true;</code>' + ' ' + 'Type: ' + typeof waterIsGewd;
};

// //null
function nullType() {
    let noValue = null;
    document.getElementById('getNull').innerHTML = '<code>let thisVariable = null;</code>' + ' ' + 'Type: ' + typeof noValue + '<a href="http://2ality.com/2013/10/typeof-null.html">. This is why</a>';
};

// //undefined
function undefinedType(){
    let uhhh;
    document.getElementById('getUn').innerHTML = ('<code>let uhh;</code>' + ' Type: ' + typeof uhh);
};

// //number
function numberType(){
    let magic = 333;
    document.getElementById('getNumb').innerHTML = ('<code>let magic = 333;</code>' + ' Type: ' + typeof magic);
};

//NaN
function nanType(){
    let pita = Math.sqrt(-5);
    document.getElementById('getNan').innerHTML = ('<code>let pita = Math.sqrt(-5);</code>' + ' Type: ' + typeof pita);
};

//string
function stringType() {
    let myName = 'grant';
    document.getElementById('getString').innerHTML = ('<code>let myName = grant;</code>' + ' Type: ' + typeof myName);
}

//add 2 numbers together
function addTwo(){
    let a = 5;
    let b = 4;
    let c = a + b;
    document.getElementById('addTwo').innerHTML = ('5 + 4 = ' + c);
};

// //only runs when both are true
function twoTrue(){
    let a = 6;
    let b = 7;
    if(a > 1 && b > 1){
        console.log('Hooray for numbers!')
      } else {
          alert('We got problems');
      }
};


//only runs when one is true
function oneTrue(){
    let a = 6;
    let b = 7;
    if(a > 0 || b > 100){
    console.log('Only one is right, but who cares?');
    }
};

//only runs when both are not true
function twoUntrue(){
    let a = 6;
    let b = 7;
    if(!(a > 100 && b > 100)){
    console.log('both not true');
    }
};

//function that gets typeof whatever the user inputs. However, since the prompt is only a "text box" (i guess), I only get typeof "string" when it checks
function getValue(){
    let userInput = window.prompt('Type anything to get the typeof: ');
    alert('This is type: ' + typeof userInput);
};