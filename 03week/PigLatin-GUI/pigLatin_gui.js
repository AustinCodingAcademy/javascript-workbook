window.onload = function() {    // wait for loading to finish
    function pigLatin(str) {    // define function to convert input
        return str.replace(/\b(\w)(\w+)\b/g, function(a,b,c) {  // magic regex
            if (/[A-Z]/.test(b)) { 
                c = c.replace(/^\w/, function(x) { return x.toUpperCase() });
            }
            return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay'); // check for vowels       
        })
    }
    
    document.getElementById('myform').onsubmit = function () { // when the form is submitted
        document.getElementById('text').value = pigLatin(document.getElementById('text').value);    // change the text in textarea
        return false;   // prevent the default event (would cause page reload)
    }
};