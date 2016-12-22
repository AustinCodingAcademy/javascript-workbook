'use strict';

$(document).ready(function() {
  
    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
        success: function(response) {

            response.forEach(function(item) {

                //create formatted link item in variable
                if (item.description.indexOf("#post") >= 0) {
                    console.log("#post detected!");

                    //create a string with the formatted <a> element and create a new data attribute with the item's url
                    //add br tag (temp?)
                    var str = "<li><a href = \"#\" data-url=" + item.url + ">" + item.description.replace("#post", "") + "</a></li>";
                    //check value in console
                    console.log(str);
                    //populate list
                    $("#posts").append(str);
                }

                console.log($("body").html());

                $("a[data-url]").click(function(event) {
                    console.log("click register");
                    //Prevent default action
                    event.preventDefault();

                    $.ajax($(this).data("url"), {
                        success: function(response) {
                            console.log("success!" + response.url)

                            console.log(response.files["post.md"]["content"]);
                            var content = response.files["post.md"]["content"];
                            $("#post").html(marked(content));

                            //GET COMMENTS
                            $.ajax(response.comments_url, {
                                success: function(response) {

                                  //iterate through comment items
                                    response.forEach(function(comment) {
                                        console.log("comment: " + comment.user.login);
                                        var str = "<li>" + comment.user.login + "</li>" +
                                                  "<li>" + comment.body + "</li>";
                                        $("#comments").html(str);
                                    })



                                }
                            })
                        }
                    });




                })





            })


        }

    })
});
