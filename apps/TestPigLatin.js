var usr_word;
var pigla = "ay";
var output;

$(document).ready(function(){
  
  $(".button-submit").on('click',function(){ 
    usr_word = $(this).parent().children('.input-word').text(); 
   
    if (usr_word.length > 0 &&  usr_word.match(/^[a-zA-Z][a-zA-Z]+$/) !== null) {
    $(".result-text").css('background-color','transparent');
		var vowels = ["a","e","i","o","u"];
		var first = usr_word.slice(0,1);
		var sLast = usr_word.slice(1);

			if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
				output = usr_word + pigla;
				$(".result-text").text(output);
			}

			else {
				output = sLast + first + pigla;
				$(".result-text").text(output);
			}
	}		
		
    else {
    $(".result-text").text("Enter a valid word!");
    $(".result-text").css('backgroundColor','#B63434');
    }
    
  });
  
  
  // Word pic fumction
  $('.wordlists li').on('click',function(){
  var wordPick = $(this).text();
    $('.input-word').text(wordPick);
    
    // Smooth Scroll
     $('html, body').animate({
            scrollTop: $(".project-cont").offset().top
        }, 200);
    
  });


});
  
  
 






