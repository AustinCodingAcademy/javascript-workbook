const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What do you think of Node.js? ', (answer1) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer1}`);
    rl.question('are you sure? ', (answer2) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer2}`);


    
    });

 
});
