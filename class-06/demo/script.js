// var username;
var username = 'Sue';
var catName = 'Amelia';

console.log('Hello, world!');
console.log(username);

username = 'Stephanie';
console.log(username);

username = 'Madison';
console.log(username);

username = prompt('What is your name?');
console.log(username);
document.write('<h2>Welcome, ' + username + '! We are so glad you adopted ' + catName + '!</h2>');

var wantsToAdopt = prompt('Do you want to find your new best friend?');
console.log(wantsToAdopt);

if (wantsToAdopt === 'yes') {
  document.write('<h2>Found your forever friend? <a href="apply.html">Apply now!</a></h2>');
} else {
  document.write('<h2>Please spread the word about all these amazing animals who need homes!</h2>');
}
