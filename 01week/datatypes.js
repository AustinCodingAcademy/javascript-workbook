//display current day and time

function getDate(){
    let today = new Date();

    let date = (today.getMonth()+1) + "/" +today.getDate() + "/"+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return "Date " + date + " Time " +  time;
}

console.log(getDate());

//Turn a number into a string
function numberToString(number){
    return number.toString();
}

console.log(numberToString(7))

//turn string into number
function stringToNumber(string){
    return Number(string)
}

console.log(stringToNumber('7'))

//add two numbers 
function addNumbers(number1,number2){
    return number1 + number2
}

console.log(addNumbers(10,2))