var allSeconds = 78259135;

var secondsPerDay = 60 * 60 * 24;
var secondsPerHour = 60 * 60;
var secondsPerMin = 60;

var wholeDays = Math.floor(allSeconds / secondsPerDay);
var remainingSeconds = allSeconds % secondsPerDay;

console.log("all seconds =", allSeconds);
console.log("wholeDays = ", wholeDays);
console.log("remaining seconds = ", remainingSeconds);

var wholeHours = Math.floor(remainingSeconds / secondsPerHour);
remainingSeconds = remainingSeconds % secondsPerHour;
console.log("whole hours = ", wholeHours);
console.log("remaining Seconds = ", remainingSeconds);

var wholeMin = Math.floor(remainingSeconds / secondsPerMin);
remainingSeconds = remainingSeconds % secondsPerMin;

console.log("whole mins", wholeMin);
console.log("remaining seconds ", remainingSeconds);
