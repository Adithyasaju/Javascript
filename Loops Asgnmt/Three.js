//print no of even and odd number count
let numbers=[4,12,64,57,25,48,39,47,1,141]
let even_count=0;
let odd_Count=0;
for(let num of numbers){
    if(num%2==0){
        even_count=even_count+1;
    }
    else{
        odd_Count++;
    }
}
console.log("No of even numvers:" +even_count);
console.log("No of odd numvers:" + odd_Count);
