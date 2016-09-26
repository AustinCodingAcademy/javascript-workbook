'use strict';

$(document).ready(function() {
    // Your code here

    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function(response) {
          
            var user = response;

            user.forEach(function(user) {
                // console.log(user.first_name + ' is their name');
                //var url = "https://reqres-api.herokuapp.com/api/users/";

                var str = "<tr>";
                str = str + "<td>" + user.id + "</td>";
                str = str + "<td>" + user.first_name + "</td>";
                str = str + "<td>" + user.last_name + "</td>";
                str = str + '<td><a href="#' + '" data-id="' + user.id + '">view</a></td></tr>';

                $('tbody').append(str);
            });

            $('a').click(function() {

                event.preventDefault();
                var thisLink = $(this);
                var thisUserID = thisLink.data('id');
                //console.log(thisUserID);

                if(thisUserID > 0) {





                var url = 'https://reqres-api.herokuapp.com/api/users/';

                url = url + thisUserID;

                //console.log(url);
                $.ajax(url, {
                    success: function(response) {
                        var user = response;
                        $('#details').children('h3').text(user.first_name + ' ' + user.last_name);
                        $('#details').children('h4').text(user.occupation);
                        $("#details").children('p').text(user.phone);
                        $('#details').children('img').attr('src', user.avatar);
                        $('#details').children('p').next().text(user.address);


                    }
                });

              }
              else {
                $('#details').children('h3').text('first last');
                $('#details').children('h4').text('student');
                $("#details").children('p').text('5551234567');
                $('#details').children('img').attr('src', "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg");
                $('#details').children('p').next().text('123 Whatever Street, Austin, TX 78701');
              }

            });


        }
    });


    // event listener for the click


});
