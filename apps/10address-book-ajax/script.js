'use strict';

$(document).ready(function() {
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function(user) {
            user.forEach(function(item) {
                    //test item
                    console.log(item.id);

                    //create entry format for population
                    var str = "<tr>" +
                        "<td>" + item.id + "</td>" +
                        "<td>" + item.first_name + "</td>" +
                        "<td>" + item.last_name + "</td>" +
                        "<td>" + "<a href=\"#\" data-id=" + item.id + ">view</a>" + "</td>"
                    "</tr>";
                    console.log(str);

                    //populate the filled tr element
                    $('tbody').append(str);
                })
                //END FOR EACH
            $('td a').click(function(event) {

                    console.log("clicked tr");
                    event.preventDefault();
                    var url = "https://reqres-api.herokuapp.com/api/users/" + $(this).data('id');

                    //Did we store the url and id?
                    console.log($(this).data("id"));
                    console.log(url);

                    //Make AJAX call to url.
                    $.ajax(url, {
                        success: function(user) {
                            console.log("link success");
                            console.log(user.avatar);
                            var str = "<h3>" + user.first_name + " " + user.last_name + "</h3>" +
                                      "<h4>" + user.occupation + "</h4>" +
                                      "<p>" + user.phone + "</p>" +
                                      "<p>" + user.address + "</p>" +
                                      "<img src=\"" + user.avatar + "\" >";
                            $("#details").html(str);
                            console.log(str);
                        }
                    })

                })
                //END .CLICK AJAX CALL


        }
    })


})
