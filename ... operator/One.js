//create a new array based on existing array
let nums=[10,20,30,40]  //aliasing
let a=nums;

a[0]=100;
console.log(a);               [ 100, 20, 30, 40 ]
console.log(nums);            [ 100, 20, 30, 40 ]


