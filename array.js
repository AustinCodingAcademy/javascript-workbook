
    //how would i write a list out in plain english



    //how do i turn this list into javascript code as an array




    //what is wrong with this how it is























//pretend this code runs when the user clicks a submit button
    var username = getUserName();

    function getUserName(){
        var username = 'username' + Math.random(); //pretned this is coming from user input
        return username;

    }

    var username = "";
    username =  username + getUserName() + ',';
    "jwoo, csmith, ajones, "



    var username = [];
    username.push(getUserName());


    username[0] = 'jwoo';
    username[1] = 'csmith';
    username[2] = 'ajones';


    var myusername = username[1];
    console.log(myusername);

    var row1 = [1,2,3,4,5];
    var row2 = [4,5,6,6,7]
    var spreadsheet = [row1,row2];

    var cell  = row1[0];
    var cell2 = row2[0];
    console.log(cell);







    var spreadsheet =[
        [1,2,3,4,5],
        [4,5,5,6,7]
    ]

    var cell  = spreadsheet[0][0];
    cell === 1;
