var item = [
    {name: "Apple", price:200, qty:15},
    {name: "Mouse", price:300, qty:53},
    {name: "Mango", price:100, qty:15},
    {name: "Mobile", price:5000, qty:45},
    {name: "Metro", price:20000, qty:54},

];
console.log("Total Items Are : "+ item.length);
item.map((iteminfo , index)=>{
         console.log(index , "--", iteminfo.name, iteminfo.price, iteminfo.qty);
})

console.log("---------------");

item.map((iteminfo, index)=>{
    if(iteminfo.price>100){
        console.log(index, "--", iteminfo.name, iteminfo.price, iteminfo.qty);
    }

})