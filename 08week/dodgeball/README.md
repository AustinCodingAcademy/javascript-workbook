 Add starter code to index.html and main.js files

-Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
  ----create a class template for 'player'
  ----define template variables
  ----update for red and blue 'teammates' classes
    ->Add new team specific values
    ->Make one for both teams

-Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
  ----choose a person to add by ID
  ----set 'li' to add once created to the ul
  ----create new player using, and add if reqs are true
  ----remove player from list of available people
  ----add player to arr of players
  ----add player to list of players
  ----display the name of the new player

-Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team and now has mascot and teamColor
  ----create rad and blue buttons
  ----style buttons

-Assign each player to a team with an onclick. Either Blue Team or Red Team.
  ----add event listener for click
  ----if clicked, run funtion to add to team
  ----grab id from list in HTML
  ----find the person being added
  ----run in teammate class, adding new values for team
  ----repet for both teams

-Display the two teams in a new list in the DOM with appropriate titles.
  ----remove from players list
  ----run function to add to team list
  ----add object to team list by name

-Create 3 tests for your application.


GRADING CRITERIA
20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.
20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.
20pts - Can add Players to different Teams - When we click on the blue button they Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
20pts - Uses Class - This is not a hack job. You should use class to add the new properties you need and extend when you need.
20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit test that prove a person becomes a player and player becomes a teammate.