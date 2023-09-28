# Tic-Tac-Toe redo

Just a re-do of the tic tac toe project to quickly refresh concepts.

## Issues

So far everything works but there are things I'd like to do to make it 
work in a more realistic way: 
 - I think after every match the (i.e. when the either the player's or the computer's score reaches five) the event listeners on the r-p-s buttons should be removed and only the play again button should allow for another match to start.
 - I don't know if there's a way (I'm guessing there must be) but just referencing the DOM nodes on the playGame function (like 'messageBoard' or 'playerScoreboard') doesn't seem like the tidiest bit of code. In an ideal world I'd prefer if those were passed as parameters, for example.