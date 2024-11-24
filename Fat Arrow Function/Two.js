function add(a,b){
    console.log(a+b);
}
add(1,2)             //3
add(10,20)           //30
add(1)               //NaN

//fat arrow
let add1=(a,b)=>{
    console.log(a+b);
    
}
add1(1,2)             //3
add1(10,20)           //30
add1(1)               //NaN