const Todos = require('../models/TodosModel');

class TodosController {
    // GET FIND ALL
    async _get(req, res){
        try{
            const todos = await Todos.find({});
            res.send(todos);
        }
        catch(e){
            res.send({e})
        }
    }
    // FIND ONE TODO BY _ID
    async _findOne(req ,res){
        let { todo_id} = req.params;
        try{
            const todo = await Todos.findOne({_id:todo_id});
            res.send(todo);
        }
        catch(e){
            res.send({e})
        }

    }
    // POST ADD ONE
    async _insert (req, res) {
        let { todo } = req.body;
        try{
            const done = await Todos.create({todo});
            res.send(done)
        }
        catch(e){
            res.send({e})
        }
    }
    // DELETE TODO
    async _delete (req, res) {
        let { _id } = req.body;
        try{
            const todo = await Todos.remove({_d});
            res.send(todo);   
        }
        catch(e){
            res.send({e})
        }

    }
    // UPDATE TODO
    async _update (req, res) {
        let { _id, newTodo } = req.body;
        try{
            const todo =  await Todos.update({_id}, 
                {$set:{ todo:newTodo }}
            );
            res.send(todo);
        }
        catch(e){
            res.send({e})
        }

    }
}
module.exports = new TodosController();
