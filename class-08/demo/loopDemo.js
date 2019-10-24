// red light - we don't know when the condition will change

var lightColor = prompt('What color is the light?');

while (lightColor === 'red') {
  console.log('Stop the car!');
  lightColor = prompt('What color is the light?');
}

console.log('Gooooooo!');

// we need to do something a certain number of times. Let's do pushups!

var pushupCounter = 0;

while (pushupCounter < 10) {
  console.log('Do a pushup!');
  // pushupCounter = pushupCounter + 1;
  // pushupCounter += 1;
  pushupCounter++;
  console.log('I have done ' + pushupCounter + ' pushups!');
}

// a for loop is just a shorthand version of a while loop that has a counter
for (var pushupCounter = 0; pushupCounter < 10; pushupCounter++) {
  console.log('Do a pushup!');
  console.log('I have done ' + pushupCounter + ' pushups!');
}

// ... and, because programmers hate to type, we often use "i" as our variable name for our counter
for (var i = 0; i < 10; i++) {
  console.log('Do a pushup!');
  console.log('I have done ' + i + ' pushups!');
}

// fun with keyboard shortcuts:
// cmd/ctrl up or down arrow = move a line
// cmd/ctrl d = highlight multiple uses of the same word, and make cursors at each one
// cmd/ctrl f = find
