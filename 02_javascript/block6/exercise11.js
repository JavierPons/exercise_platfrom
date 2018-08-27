// Continuing the previous exercise, add the possibility to force the type of the value that can be set on a given property. In this 
// case schema is an object and no longer an array. The allowed values are only "string", "number" and "boolean". If the value of a 
// given property does not have the appropriate type, then the property will not be added to the new object in the db.

// if the argument add is not present then nothing should be added.

//   1. array -> object     2. object allow only -> string, number, boolean.  3. In not this not added to DB

 schema = {id: "number", name: "string", age: "number", married: "boolean", address:'string'}
// DB = []

 model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"})
// DB // [{id: 1, name: "Joe"}] => married and age not added because of the wrong type (why?)




function model(type, data) {
    var DB = [];
    var temp = {}
    if (type !== 'add') {
       //something
    } else if (type === 'add'){
      Object.keys(schema).forEach(function(key) {
         Object.keys(data).forEach(function(item) {
              if (item === key) {
   
               if(schema[key] === typeof data[item]){
                 temp[item]= data[item];
                 
                    }
              };
         })
      })
     DB.push(temp)
    };
  return DB;
  }
module.exports = {
    model
}
