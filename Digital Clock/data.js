//document.querySelector('.ct').innerHTML="GM"

setInterval(()=>{
    let dt=new Date();
    let ct=dt.toLocaleTimeString();
    document.querySelector('.ct').innerHTML=ct
   // document.querySelector('.ct').innerHTML=new Date().toLocaleTimeString();
},1000)
