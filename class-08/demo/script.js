// var username;
var username = prompt('What is your name?');
document.write('<h2>Welcome, ' + username + '!</h2>');

var wantsToAdopt = prompt('Do you want to find your new best friend?');
console.log(wantsToAdopt);

if (wantsToAdopt === 'yes') {
  document.write('<h2>Found your forever friend? <a href="apply.html">Apply now!</a></h2>');
} else {
  document.write('<h2>Please spread the word about all these amazing animals who need homes!</h2>');
}

function createCatArticle(name, image, description) {
  var catArticle = '<article>' +
    '<h3>' + name + '</h3>' +
    '<img src="' + image + '">' +
    '<p>' + description + '</p>' +
    '</article>';

  return catArticle;
}

var wantsToAdd = prompt('Hey there! Do you want to add a cat?');

while (wantsToAdd === 'yes') {
  var catName = prompt('What is the name of the cat?');
  var catImage = prompt('What is the name of the file containing the image?');
  var catDescription = prompt('What is the description of the cat?');
  var newCat = createCatArticle(catName, catImage, catDescription);
  document.write(newCat);
  wantsToAdd = prompt('Hey there! Do you want to add another cat?');
}

function showCatPhotos() {
  var numberOfCatPhotos = prompt('Hey there! How many cat photos do you want to see?');

  for (var i = 0; i < numberOfCatPhotos; i++) {
    document.write('<img src="http://aws.random.cat/meow">')
  }
}
