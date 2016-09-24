'use strict';

$(document).ready(function() {
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function(users) {
            users.forEach(function(userObject) {
                //userObject is the response
                var id = userObject.id.toString();
                // console.log(typeof id);
                // console.log(userObject.first_name);
                // console.log(userObject.last_name);
                var str = '<tr>' +
                    '<td data-id="' + id + '">' + id + '</td>' +
                    '<td>' + userObject.first_name + '</td>' +
                    '<td>' + userObject.last_name + '</td>' +
                    '<td><a href="#" data-id="' + id + '">view</a></td>' +
                    '</tr>';
                // console.log(str);
                $('tbody').append(str);
            })

            $('td > a').on('click', function() {
                event.preventDefault();
                var url = 'https://reqres-api.herokuapp.com/api/users/';
                url += $(this).data('id');
                console.log(url);
                $.ajax(url,
                    //   {
                    //   ajaxError: function ()  {
                    //     console.log('wtf');
                    //   }
                    // },
                    {
                        success: function(user) {
                            // user.forEach( function(property)  {
                            //   if (property === undefined) property = '(missing data)';
                            // })
                            // console.log();
                            var str = '<div>' +
                                '<h3>' + user.first_name + ' ' + user.last_name + '</h3>' +
                                '<h4>' + user.student + '</h4>' +
                                '<p>' + user.number + '</p>' +
                                '<p>' + user.address + '</p>' +
                                '<img src="' + user.image +
                                '"/>' +
                                '</div>';
                            $('div#details').append(str);
                        }
                    })
            });
        }

    });

});
