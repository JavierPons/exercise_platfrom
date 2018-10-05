const express   = require('express'),
    router      = express.Router(),
    controller  = require('../controllers/GenresController');

    // == This route will give us back to genres:

    router.get('/genre',controller._get);

     // This route will delete genre

     router.post('/genre/delete', controller._deleteGenre);

     // This route will add genre

    router.post('/genre/add', controller._addGenre);

    module.exports = router;
