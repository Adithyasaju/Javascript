function cal_Age(name,dob){
    let current_Year=new Date().getFullYear();

    return `Name : ${name} - Age :${current_Year - dob}`
}

let msg1=cal_Age("Arun",1998)
let msg2=cal_Age("Sona",2001)
let msg3=cal_Age("Femi",1986)
console.log(msg1);
console.log(msg2);
console.log(msg3);
