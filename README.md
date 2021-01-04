# Stack Guesser
## A *very* simple node.js application to guess the accepted answers to recent stack overflow questions


### How to use
When you open the guesser, we'll pull a list of recently answered questions from Stack Overflow and list them with the "new" badge. Simply expand one of the questions and read it. Then, take a look at the list of answers at the bottom of the question. Expand each one and try to guess which was chosen as the accepted answer. Take a guess by clicking the "Guess" button next to an answer. 

If you chose the right answer, you'll see a green "Correct" badge next to the answer and also next to the question. If you guess wrong, you'll see a red "Incorrect" badge. Feel free to keep guessing until you get it right!

We will only display questions that have an accepted answer and at least 2 answers. 

### Dev considerations
This is a very simple app, done in a few hours. It does not have a testing suite, session data management, a database, or a polished user interface. As a learning experience, I used EJS for the UI templating, which I learned does not format well in VS Code. If I had to start over I'd probably use handlebars or (better yet) TSX. 

Given more time I'd allow users to log in and keep track of their scores. I'd polish up the user interface and add more data handling. I'd also add a testing suite.