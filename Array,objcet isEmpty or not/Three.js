let emp={
    eid:101,
    ename:'Rahul'
}
let user={

}
if(Object.keys(emp).length>0){
    console.log("Not Empty Object");
    
}
else{
    console.log("Empty Object");
    
}
/*if(Object.keys(user).length>0){
    console.log("Not Empty Object");
    
}
else{
    console.log("Empty Object");
    
}*/

Object.keys(emp).length>0?console.log("Not an Empty Object") : console.log("Empty Object");

