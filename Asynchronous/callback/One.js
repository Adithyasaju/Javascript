let cal=(a,b,operation)=>{
    if(operation==="sum"){
        return a+b;
    }
    if(operation==="multi"){
        return a*b;
    }
}
let r1=cal(10,20,"sum");        //string as a parameter
let r2=cal(10,20,"multi");
console.log(r1);
console.log(r2);

