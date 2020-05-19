var a = 1, b = 2, c = 3;

(function firstFunction(){
    b = 5, c = 6;

    (function secondFunction(){
         b = 8;

        (function thirdFunction(){
             a = 7, c = 9;

            (function fourthFunction(){
                a = 1, c = 6;

            })();
        })();
    })();
})();
console.log("a: "+a+", b: "+b+", c: "+c);