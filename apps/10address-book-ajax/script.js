'use strict';

$(document).ready(function () {

    // First ajax call to get the initial list of users
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function (response) {
            response.forEach(function (user) {
                // Append user info to the table
                $('tbody').append(
                    '<tr><td>' + user.id + '</td> <td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a href="#" data-id="' + user.id + '">view</a></td></tr>');
            });
        }
    });

    // Listener for a link click to clear out the details div and replace
    $(document).on("click", "a", function () {
        $('#details').empty();
        replaceDiv($(this));
    });
});

// Function to replace the Div, via another ajax call
function replaceDiv(obj) {
    var userId = (obj.data("id"));
    $.ajax('https://reqres-api.herokuapp.com/api/users/' + userId, {
        success: function (user) {
            $('#details').append('<h3>' + user.first_name + ' ' + user.last_name + '</h3> <h4>' + user.occupation + '</h4> <p>' + user.phone + '</p> <p>' + user.address + '</p> <img src= "' + user.avatar + '" >');
        }
    });
}