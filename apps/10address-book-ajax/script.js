'use strict';

$(document).ready(function() {
    
	$.ajax('https://reqres-api.herokuapp.com/api/users/', {
		success: function(users) {
			event.preventDefault();
			user.forEach(function(users){ 
  			
				var str = '<th>' + user.id + '</th><th>' + user.first_name + '</th><th>' + user.last_name + '</th>';

	  			console.log(str);
	  			$('tbody').append(str);

	  			var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id', 0);

	  			$.ajax(url, {
	  				success: function(user) {
	  					var str = '<h3>' + user.first_name + ' ' + user.last_name + '</h3>' + 
	  					'<h4>' + user.occupation + '</h4>' + 
	  					'<p>' + user.phone + '</p><p>' + user.address + '</p>' + '<img src="' + user.avatar + ">;
	  				}
	  			}
  			}
  		}
	});
});