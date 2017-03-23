'use strict';

//------ JQuery AJAX Object -------------

//Settings response from Jquery onReady.   this is the page setup.
var settings = {
  success:function(response){   // defined by Jquery
  //  console.log(response);
  // console.log(response.length);
    for (var i=0; i< response.length; i++){
      var str = '<tr><td>' + response[i].id + '</td><td>' + response[i].first_name + '</td><td>' + response[i].last_name + '</td><td><a href="#"' /* + response[i].id +*/ + 'data-id=' + response[i].id + '>view</a></td></tr>';
      $('tbody').append(str);
    }  //end of for loop
  } //end of sucess function
}; //end of settings2


//Settings2 response for JQuery onclick for View
var settings2 = {
  success:function(response){   // defined by Jquery
    console.log(response);
    var str = '<h3>' + response.first_name + " " + response.last_name +'</h3><h4>' + response.occupation +'</h4>' + '<p>'  + response.phone + '</p><p>' + response.address +'</p><img src="' + response.avatar + '">' ;
    $('#details').html(str);

  } //end of success
} //end of settings2

//---------------- Event handlers -------------

// onClick function
var clickAction = function (clickOnView) {
  clickOnView.preventDefault();
  console.log($(clickOnView.target).data('id'));
  var url = 'https://reqres-api.herokuapp.com/api/users/' + $(clickOnView.target).data('id');

  //Make Ajax call when click View
  $.ajax(url, settings2);

}



//-----------------------------Beginning of Real File -------------------------------
$(document).ready(function() {
  // You code here

//initial JQueary API call
  $.ajax('https://reqres-api.herokuapp.com/api/users', settings)

  ///whole new Jquery call for Clikc on View
  $('tbody').on('click', '[data-id]', clickAction); // end of click Jquery call

});
