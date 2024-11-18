let employees=[{eid:101,ename:'Rahul',gender:'Male'},
               {eid:102,ename:'Sona',gender:'Female'},                
               {eid:103,ename:'Priya',gender:'Female'},                
               {eid:104,ename:'Amith',gender:'Male'}                

               ]

            for(emp of employees){
                if(emp.gender==='Male'){
                    console.log(emp.ename);
                }
               }