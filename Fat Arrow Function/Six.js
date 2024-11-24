//function is being hoisted (i.e) overridding
function greet(){
    console.log("GM");
    
}
greet()                           //GN

function greet(){
    console.log("GN");
    
}
greet()                          //GN