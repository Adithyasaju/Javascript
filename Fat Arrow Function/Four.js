//Implicit fat arrow
let getMessage=name=>"Hello!" + name;
let msg=getMessage("Rahul");
console.log(msg);

//Fat arrow function
let getMessage1=(name)=>{
    return "Hello!" +name
}
let msg1=getMessage("Sam");
console.log(msg1);

//funtion
function getMessage2(name){
    return "Hello!" + name;
}
let msg2=getMessage2("Amith");
console.log(msg2);
