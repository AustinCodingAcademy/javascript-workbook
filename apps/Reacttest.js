var express = require('express');
var app = express();

    app.get('/', function(request, response){
        response.send("hello world");
        response.end();
    });

    app.listen(3000, function(){
        console.log('Listening on port 3000');
    });

    app.get('/blocks', function(request, response){
            var blocks = ['Fixed', 'movable', 'Rotating'];
                response.send(blocks);
    });