// Regular Expression Modifiers
// i Perform case-insensitive matching
// Example:
var str1 = "Visit W3Schools";
var patt1 = /w3schools/i;
var result1 = str1.match(patt1);
console.log(result1);

// g Perform a global match (find all matches rather than stopping after the first match)
// Example:
var str2 = "Is this all there is?";
var patt2 = /is/g;
var result2 = str2.match(patt2);
console.log(result2);
  
// m Perform multiline matching
// Example:
var str3 = "\nIs th\nis it?";
var patt3 = /^is/m;
var result3 = str3.match(patt3);
console.log(result3);

// Regular Expression Patterns
// [abc] Find any of the characters between the brackets	
// Example:
var str4 = "Is this all there is?";
var patt4 = /[h]/g; 
var result4 = str4.match(patt4);
console.log(result4);