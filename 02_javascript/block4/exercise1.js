
// write a function called check_who_is_older, it takes 4 arguments (name, age, name2, age2)
// it checks who is older and returns a sentence saying "{{name}} age {{age}} is older than {{name2}} age {{age2}} "
// should they be of the same age it should return "they are of the same age".

var name = 'Pablo';
var age = 17;
var name2 = 'Esther';
var age2 = 28;

function check_who_is_older(name, age, name2, age2) {
        if(age > age2){
                return `${name} age ${age} is older than ${name2} age ${age2}`;
        }else if(age < age2) {
            return `${name2} age ${age2} is older than ${name} age ${age}`;
        }else if(age == age2){
            return "they are of the same age";
        }

}
    module.exports = {
    check_who_is_older
}