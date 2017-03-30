'use strict';

$(document).ready(function () {
  // App logic goes here
  function render()
  let todos = [];
  $('#reverse').click(() => {

    })
    ('form').on('submit', (event) = > {
      preventDefault();
      let todoText = $('input[name=todo]').val();
      if (!todoText) {
        console.log('nah');
        return;
      }
      console.log('something')
      todos.push(todoText);
      $('ul#todo-list').empty();
      todos.forEach {
        todo => $('ul#todo-list').append(`<li`)
      }
      $('#todo-list').append(
        `<li>${$('input[name=todo]').val()}</li>`
      );
    })
  render();
});
