var allSeconds = 78259135;

var secondsPerDay = 60 * 60 * 24;

var secondsPerHour = 60 * 60;

var secondsPerMinute = 60;

var wholeDays = Math.floor(allSeconds / secondsPerDay);
var remainingSeconds = allSeconds % secondsPerDay;

console.log("wholeDays =", wholeDays);
console.log("remaining seconds", remainingSeconds);

var wholeHours = Math.floor(remainingSeconds / secondsPerHour);
console.log("whole hours = ", wholeHours);

remainingSeconds = remainingSeconds % secondsPerHour;

var wholeMins = Math.floor(remainingSeconds / secondsPerMinute);
