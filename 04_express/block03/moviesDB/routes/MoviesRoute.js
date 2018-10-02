const express   = require('express'),
    router      = express.Router(),
    controller  = require('../controllers/MoviesController');
    
    // == This route will give us back to genres:

    router.get('/genre',controller._get);

    // == This route will give us back movies

    router.get('/genre/movies', controller._movies)

    // == This route add a movie

    router.post('/genre/movie/add', controller._add);

    // == This route will update

    route.post('/genre/movie/update', controller._update);

    // == This route will delete movie

    route.post('/genre/movie/delete', controller._deleteMovie);

    // This route will delete genre

    route.post('/genre/delete', controller._deleteGenre);

    // This route will add genre

    route.post('/genre/add', controller._addGenre);