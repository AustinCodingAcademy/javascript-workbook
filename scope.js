//your file is the main scope
//anything directly in the file is accesible by anything in the file
//you can pretend that your file is inside a function
function scope3(){
    function sibling3(){

    }    
}
function scope(){
    
    var myvar = "hello";
    console.log(myvar);
    var sibling1 = function sibling1(){
        var sibling1var  = "hello from sibling 1";
        console.log(myvar);
        //sibling3();
    }
    var sibling2 = function sibling2(){
        console.log(sibling1);
        console.log(sibling2);
        console.log(sibling1var);
        console.log(myvar);
        function child1(){
            var child1var = "child1";
            function grandchild(){
                child1();
                console.log(child1var);
                sibling1();
                scope();
                console.log(sibling1var); //nope
            }
        }
    }   
    //console.log( sibling1var);
    sibling1();
    sibling2();
    child1();

}
scope();