let employees=[
    {eid:101,ename:'Rahul',esal:45000},
    {eid:102,ename:'Priya',esal:55000}
]
let createEmployee= (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag==true? resolve("Data Inserted"):reject("Failed");
            employees.push(emp)
        },4000)
    });
}
let getEmployee=()=>{
    setTimeout(()=>{
        let rows="";
        for(let emp of employees){
        //employees.forEach((emp)=>{
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                      </tr>  `
        }
        document.getElementById('abc').innerHTML=rows;
    },1000)
}
let execute =async()=>{
    await createEmployee({eid:103,ename:"sona",esal:65000})
    getEmployee()
}
execute();
