const express     = require('express'), 
    router        = express.Router(),
    controller    = require('../controllers/TodosController');

//  == This route will give us back all todos: ==  //

router.get('/', controller._get);

//  == This route will give us back one todo, it will be that with the id we are providing: ==  //

router.get('/:todo_id', controller._findOne);

//  == This route allow us to add an extr todo: ==  //

router.post('/new', controller._insert);

//  == This route allow us to delete one todo t will be that with the id we are providing: ==  //

router.post('/delete', controller._delete);

//  == This route allow us to update one todo t will be that with the id we are providing ==  //

router.post('/update', controller._update);

module.exports = router;
