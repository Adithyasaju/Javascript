function wish(){
    console.log(this);                        //Object context is heavy
    
    
}
wish()

//fat arrow function
let wish1=()=>{
    console.log(this);                          //{} empty object
    
}
wish1()