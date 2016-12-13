'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function(response) {
            response.forEach(function(users) {
                var str = "<tr>" +
                    "<td>" + users.id + "</td>" +
                    "<td>" + users.first_name + "</td>" +
                    "<td>" + users.last_name + "</td>" +
                    "<td>" + "<a href='#' data-id= '" + users.id + "'> view</a>" + "</td>" +
                    "</tr>";

                $("tbody").append(str);
            });
            individiual();

        }

    });


    function individiual() {
        $("td").on('click', 'a', function(event) {
            event.preventDefault();

            var url = "https://reqres-api.herokuapp.com/api/users/"

            var dataID = $(event.target).data("id");

            var userUrl = url + dataID;

            $.ajax(userUrl, {
                success: function(users) {
                        var str =
                            "<h3>" + users.first_name + " " + users.last_name + "</h3>" +
                            "<h4>" + users.occupation + "</h4>" +
                            "<p>" + users.phone + "</p>" +
                            "<p>" + users.address + "</p>" +
                            "<img src='" + users.avatar + "'>";

                        $("#details").html(str);

                }
            });
        });
    }



});
