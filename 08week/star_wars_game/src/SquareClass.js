//     state: This will control behavior: pending, activeA, activeB, complete
//       - pending: Display: Money;  clickable
//       - active A: Display: Question, Money; not clicable; blue glow (1st attempt)
//       - active B: Display: Question, Money; not clicable; orange glow (2nd attempt)
//       - complete (Disabled): Display: Question, Answer, Player, Money; not clickable
//         - Correctly Answered: Green
//         - Wrongly answered: Red
//     Question: from Star Wars JSON  (this is a statement)
//     Answer:   from Star Wars JSON  (this is the answer in the form of a question)
//     Attempt: 1st or 2nd attempt
//     gotCorrect: player or null if no one answered correctly
//     dailyDouble: True or False
//     r1Money: 100, 200, 300, 400, 500
//     r2Money: 200, 400, 600, 800, 1000

class SquareClass {
  constructor(squareID) {
    // super();
    this.id = squareID;
    this.squareState = 'pending';
    this.question =  '';
    this.answer = '';
    this.attempt = null;
    this.gotCorrect = '';
    this.dailyDouble = false;
    this.r1Money = (squareID+1) * 100;
    this.r2Money = (squareID+1) * 200;
  }

}  // Square class

export default SquareClass;
