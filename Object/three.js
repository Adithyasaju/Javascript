let employee={
    eid:101,                   //duplicate keys are not allowed but duplicate values are allowed
    ename:"Rahul",
    esal:45000,
    eid:105
}
console.log(employee)          //{ eid: 105, ename: 'Rahul', esal: 45000 }