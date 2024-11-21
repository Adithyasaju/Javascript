let eids=[101,102,103,104]
eids.push(105)
//console.log(eids.push(105));        //5
console.log(eids);                 //[ 101, 102, 103, 104, 105 ]

eids.pop()
console.log(eids);                //[ 101, 102, 103, 104 ]

//append element-begining
eids.unshift(100)
console.log(eids);                //[ 100, 101, 102, 103, 104 ]

//remove at begining
eids.shift()
console.log(eids);                //[ 101, 102, 103, 104 ]



