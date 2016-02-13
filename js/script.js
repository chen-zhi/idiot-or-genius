var guessCount = 0;
var correctGuess = false;

do {
  guess = prompt('Are you an idiot or a genius? Type 1 for idiot and 2 for genius.');
  guessCount += 1;
  if (parseInt(guess) == 1) {
    correctGuess = true;
  }  
} while (!correctGuess && guessCount <= 2)

 if (guessCount >= 3) {
   document.write('<h1>You are so foolish!</h1>');
   document.write('You are an idiot, absolutely! Never try to be a genius! You even tried 3 times on this stupid silly game!! how can you be smart?? How stupid you are!!');
 }
else {
  document.write('<h1>You are an idiot, absolutely! </h1>');
  document.write('It&rsquo;s good to know who you are, idiot!');
}