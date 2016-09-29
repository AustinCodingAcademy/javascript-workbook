'use strict';

$(document).ready(function() {
    // Your code here

    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function(response) {

            var user = response;

            user.forEach(function(user) {

                var str = "<tr>";
                str = str + "<td>" + user.id + "</td>";
                str = str + "<td>" + user.first_name + "</td>";
                str = str + "<td>" + user.last_name + "</td>";
                str = str + '<td><a href="#' + '" data-id="' + user.id + '">view</a></td></tr>';

                $('tbody').append(str);
            });

            $('a').click(function(event) {

                event.preventDefault();
                var thisLink = $(this);
                var thisUserID = thisLink.data('id');

                if (thisUserID > 0) {

                    var url = 'https://reqres-api.herokuapp.com/api/users/';

                    url = url + thisUserID;

                    $.ajax(url, {
                        success: function(response) {
                            var user = response;
                            // $('#details').children('h3').text(user.first_name + ' ' + user.last_name);
                            // $('#details').children('h4').text(user.occupation);
                            // $("#details").children('p').text(user.phone);
                            // $('#details').children('img').attr('src', user.avatar);
                            // $('#details').children('p').next().text(user.address);

                            var str = "<h3>" + user.first_name + " " + user.last_name + "</h3>";
                            str = str + "<h4>" + user.occupation + "</h4>";
                            str = str + "<p>" + user.phone + "</p>";
                            str = str + '<img src="' + user.avatar + '"/>';
                            str = str + "<p>" + user.address + "</p>";

                            //console.log(str);

                            $('#details').html(str);
                        }
                    });

}
                // } else {
                //     $('#details').children('h3').text('first last');
                //     $('#details').children('h4').text('student');
                //     $("#details").children('p').text('5551234567');
                //     $('#details').children('img').attr('src', "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg");
                //     $('#details').children('p').next().text('123 Whatever Street, Austin, TX 78701');
                // }

            });


        }
    });

});
