let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
}
//read
console.log(emp)
//to read object values
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.email)     //undefined
//update
emp.ename="Rahul Gandhi"
emp.email="RG@gmail.com"
console.log(emp)
/*
{
  eid: 101,
  ename: 'Rahul Gandhi',
  esal: 45000.45,
  email: 'RG@gmail.com'
}
*/

//delete
delete emp.esal
console.log(emp)  //{ eid: 101, ename: 'Rahul Gandhi', email: 'RG@gmail.com' }
