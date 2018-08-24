MOVIES DB
Create a movie DB that stores our movies and divides them by genre.
You should be able to create a CRUD (Create, Read, Update, Delete) app for adding genres as well as movies. 
all movies should have at least a title and a year of release and both should be editable.
all data must be passed through the body using postman instead of params through the url.

API:

| Method | URL                 | Action                             |
| ------ | ------------------- | ---------------------------------- |
| POST   | /genre/add          | Add a  new genre                   |
| POST   | /genre/delete       | Remove genre                       |
| POST   | /genre/update       | Update genre                       |
| GET    | /genres             | Display all genres                 |
| GET    | /genre/movies       | display the genres with all movies |
| POST   | /genre/movie/add    | Add movie                          |
| POST   | /genre/movie/delete | Delete movie                       |
| POST   | /genre/movie/update | Update title and/or year           |


***Your solution goes to the current folder***