class Account{
     acc_Id = 101;
     acc_Bal=5000;
     acc_Name='Rahul';
}
let a1=new Account()
let a2=new Account()
console.log(a1);      //Account { acc_Id: 101, acc_Bal: 5000, acc_Name: 'Rahul' }
console.log(a2);      
console.log(a1.acc_Id);
console.log(a1.acc_Bal);
console.log(a1.acc_Name);
//If try to access object property that does not exsists it gives undefined
console.log(a1.acc_minBal);   //undefined
 


