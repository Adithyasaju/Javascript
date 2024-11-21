let emp={
    eid:101,
    ename:'Rahul'
}
let user={

}

console.log(emp.length);          //undefined as object does not contain length property

console.log(Object.keys(emp));             //[ 'eid', 'ename' ]
console.log(Object.keys(user));           //[]
console.log(Object.keys(emp).length);     //2
console.log(Object.keys(user).length);    //0
console.log(Object.keys(emp).length>0);   //true
console.log(Object.keys(user).length>0);  //false



