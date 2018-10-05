const express   = require('express'),
    router      = express.Router(),
    controller  = require('../controllers/MoviesController');
    
    
    // == This route will give us back movies

    router.get('/genre/movies', controller._movies)

    // == This route add a movie

    router.post('/genre/movie/add', controller._add);

    // == This route will update

    router.post('/genre/movie/update', controller._update);

    // == This route will delete movie

    router.post('/genre/movie/delete', controller._deleteMovie);

    module.exports = router;