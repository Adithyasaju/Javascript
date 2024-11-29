//add price value +1,collect it in new array
let prices=[98,198,298,398,498,598]
let new_prices=[]
for(let price of prices){
    new_prices.push(price+1)
}
console.log(new_prices);

//map
let new_price=prices.map((price)=>{
    return price+1
})
console.log(new_price);

