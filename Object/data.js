let size=['S','M','L','XL']
let product={
    pId:101,
    pName:"Iphone 5",
    price:45000,
    color:"White"
}

document.write(size)
document.write("<br>")
document.write(product)        //cannot print object in browser ,to print it convert it into string format
document.write("<br>")
document.write(JSON.stringify(product))