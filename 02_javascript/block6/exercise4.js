// Write a function called addToList that takes one argument, an array of movie titles
// then create a new empty array called movieList.
// Loop through the array of movie titles and push them inside the movieList array as objects.
// each object will have two key/value pairs with titles and ids: 
// movie title from the array becomes the value of 'title' key in the object
// index of the element in the array should be the value for the id key in the object
// Then return movieList.

 var movies = ['matrix','the dark knight','a beautiful mind','american pie']

//Example:

//addToList(movies)
//returns ['{title:matrix, id:0}','{title:the dark knight, id:1}','{title:a beautiful mind, id:2}','{title:american pie, id:3}']

function addToList(movies) {
	var movieList = [];
        for(var i = 0; i < movies.length; i++){
            var obj = {};
            movieList.push({'title': movies[i], 'id':movies.indexOf(movies[i])} )
        }
	return movieList;
}


module.exports = {
    addToList
}