let employees=[
    {eid:101,ename:"Rahul",sal:45000},
    {eid:102,ename:"Sona",sal:55000},
    {eid:103,ename:"Amith",sal:65000}
]

function displayData(){
    //alert("Test123")
    let rows=""
    for(let emp of employees){
        rows=rows + `<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.sal}</td>
                     </tr>`
    }
    document.getElementById('abc').innerHTML=rows
}