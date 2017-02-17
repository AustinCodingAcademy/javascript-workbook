
var studentjonsinformation = "'smith', 33,3,'555555555'"
//print out jons grade. uhhhh???

























var studentjonsinformation = "lastName:'smith',grade:33,attendance:4,phoneNumber:'5555555555'";
//i want to print out grade. how?
console.log(studentjonsinformation)
















var gradeindex = studentjonsinformation.indexOf("grade:") + 6;
var grade = studentjonsinformation.substring(gradeindex,gradeindex + 2);//how do you know what second argument is
console.log(grade);



















var jongrade = 33; //grade = 33
var jonattendance = 3;
var jonphone = '5555555555';
var jonlastName = 'smith'; //lastname= 'smith'

var scottgrade = 100;
var scottattendance = 4;
var scottphone = '3333333333';
var scottlastName = 'foster';

//cool now i can easily log out last name
//still whats wrong with this
console.log(jongrade)














var studentjon = {
    firstName:'jon',
    grade:33,
    attendance:3,
    phone:'4444444444',
    lastName:'smith'
};
var studentscott = {
    firstName:'scott',
    grade:100,
    attendance:5,
    phone:'3333333333',
    lastName:'foster'
};
//console.log(jon.grade)
//i can still easly print out the last name of whoever i want but now i don't have to write jon over and over
//bonus thinking
//what if i want to print out nicks grade?















var intermediateOneStudents = {
    'nick':studentjon, 
    studentscott};

intermediateOneStudents.push(
    {
        firstName:'nick',
        grade:100,
        attendance:5,
        phone:'2222222222',
        lastName:'rodriguez',

    }
);
intermediateOneStudents[2]["car"]= "";

console.log(intermediateOneStudents[2].firstName)







console.log('hello');

function hello(){
  console.log('bye');
  var myvar = "";
  if(true){
    console.log("whats up");
    var myvar2 = "";
    if(false) {
            
    }     
  }

}