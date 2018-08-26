// Create a function called model. The model function allows you to control how you interact with a collection of objects that 
// we call collection that are stored in the DB. Model imposes conditions on the properties of the collection, for example which 
// keys are allowed.

// In this exercise create a model function. This model uses the definitions of a predefined object called schema (you don't need 
// to define it) to assert the keys that each object in a collection that are allowed. The model function can take 2 arguments: the 
// first is the type of the operation we want to execute on the db and the second is the data we need to execute it. For now we only 
// define an operation called 'add'.

// if the argument add is not present then nothing should be added.

// Example schema

schema = ["id", "name", "age"]

// Please note the schema is only an example here, I may be calling a different one from the test...
// Define you DB array inside the function to avoid issues.
// your function should take three arguments
    // an action, an object and a schema.
    // the action should be "add" or no changes should be done.
var DB = []

// model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})
// DB // [{id: 1, name: "Joe", age: 32}] => Address was not added because not allowed by the schema 

// model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})
// DB // [{id: 1, age: 32}] => Address was not added because not allowed by the schema 




function model(type, data) {


}
module.exports = {
    model
}