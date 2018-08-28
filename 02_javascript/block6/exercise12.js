
// Schema force with Default
// We will now make sure that missing values are defaulted to a certain value. From now on, the value of a given property of the 
// schema object will be formed by an object with keys "type" and "default". The type-setting system of the previous exercise 
// should work in the same way; with the exception of the new syntax. If no default key is added then the given property will 
// not be added if missing. If an input is not present or breaking an other of the schema rules, the value will be set 
// to the default.

function model(type, data) {
    var DB = [];
    var temp = {}
    if (type !== 'add') {
       //something
    } else if (type === 'add'){
       for(var item in data){
          for(var key in schema){
              var obj = schema[key];
  
          for(var key in obj){
              if(item !== key){
              }else if(item === key){
                   
  
  
  
              }	
          }
      }
    }
               
    };    DB.push(temp)        
        
      return DB;
    
    };
  

module.exports = {
    model
}