'use strict';

var prompt = require('prompt');
prompt.start();

function getPrompt() {
    prompt.get(['input'], function (error, result) {
    
        // So something with the input
        console.log('input: ' + result['input']);
        
        getPrompt();
    });
}

// Put app logic here

getPrompt();
