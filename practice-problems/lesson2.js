//1. In your own words, explain what conditionals do.

//Answer:
//conditionals evaluate if a condition is true and run code if it is.



//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:
if (answer === true){
	console.log("good job");}
	else
	console.log("try again");



//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:

if (x % 2===0){
	console.log("divisible by 2");}
if (x % 3===0){
	console.log("divisible by 3");}
if (x % 4===0){
	console.log("divisible by 4");}
if (x % 5===0){
	console.log("divisible by 5");}


//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:

function print(input){
	console.log(input);
}


//5. Create a function that prints out the average of a set of numbers.

//Answer:
function avg(){
	var total = 0;
	for (var i=0; i<arguments.length; i++){
		total =total + arguments[i];}
	console.log(total/arguments.length);
}




//6. Call your above function and write the code to make the average print out.
//Answer:
avg(4,3,2,1);
