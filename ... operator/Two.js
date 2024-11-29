//create a new array based on existing array
let nums=[10,20,30,40]
let new_nums=[]
//for of
for (let num of nums){
    new_nums.push(num);
}
console.log(new_nums);

//while
let new_number=[]
let i=0;
while(i<=nums.length-1){
    new_number.push(nums[i])
    i++
}
console.log(new_number);

//map
let new_num=nums.map((num)=>{return num})
console.log(new_num);
//implicit return 
let new_numbers=nums.map(num=>num)
console.log(new_numbers);

