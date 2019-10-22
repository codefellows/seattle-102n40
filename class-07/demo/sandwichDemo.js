// three parts of every function

// inputs: what kinds of info the function needs to do the work. Specifically, the info that will vary each time the function is run. e.g. meat, cheese, and bread.
// work: the instructions to repeat each time the function is run. e.g. make the sandwich
// output: what we want to get back. e.g. the actual sandwich.

// goal - make a sandwich:
// inputs: meat, cheese, bread
// work: create the following string using the inputs.
//       Here is your awesomely tasty meat and cheese on bread sandwich
// output: a sandwich! 'Here is your awesomely tasty turkey and pepperjack on wheat sandwich.'

// this stuff ^^ is called pseudocode

// "inputs" = "parameters"
// "outputs" = "return values"
// "run the function" = "call the function", "invoke the function"
// "actual values we give as inputs when we call the function one time" = "arguments"

function makeSandwich(meat, cheese, bread) {
  var newSandwich = 'Here is your awesomely tasty ' + meat + ' and ' + cheese + ' on ' + bread + ' sandwich';
  return newSandwich;
}

var stephaniesSandwich = makeSandwich('turkey', 'pepperjack', 'wheat');
console.log(stephaniesSandwich);
var suesSandwich = makeSandwich('ham', 'gouda', 'sourdough');
console.log(suesSandwich);
var brentsSandwich = makeSandwich('tuna', 'cheddar', 'white');
console.log(brentsSandwich);
var madisonsSandwich = makeSandwich('peanut butter', 'jelly', 'sourdough');
console.log(madisonsSandwich);
