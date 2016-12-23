'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users/', {
        success: function successHandler(response) {
            $('tbody').empty();
            response.forEach(function(user) {
                var $str = "<tr><td>" + user.id + "</td><td>" + user.first_name + "</td><td>" + user.last_name + "</td><td><a href='#' data-id='" + user.id + "'>View</a></td></tr>";
                $("tbody").append($str);
            });
            $('tbody tr td a').click(function(event) {
                event.preventDefault();
                var $id = $(this).data('id');
                var $url = "https://reqres-api.herokuapp.com/api/users/" + $id;
                $.ajax($url,{
                  success: function(person){
                    var $string = $("<h3>" + person.first_name + ' '+ person.last_name + "</h3><h4>" + person.occupation + "</h4><p>" + person.phone +"</p><p>" + person.address + "</p><img src='"+ person.avatar+ "'>");
                    $('#details').html($string);
                  }
                })
            });
        }
    });
});
