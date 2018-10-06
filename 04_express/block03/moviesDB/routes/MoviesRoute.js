const express   = require('express'),
    router      = express.Router(),
    controller  = require('../controllers/MoviesController');
    
    
    // == This route will give us back movies

    router.get('/', controller._movies)

    // == This route add a movie

    router.post('/add', controller._add);

    // == This route will update

    router.post('/update', controller._update);

    // == This route will delete movie

    router.post('/delete', controller._deleteMovie);

 module.exports = router;