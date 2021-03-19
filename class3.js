//const fetch = require("node-fetch");
class Three
{
   
    constructor(){
        this.item =[];
    }

    async getItem(){
        await fetch("item.json")
        .then(response=> response.json())
        .then(result => console.log(result.length))
    }
  
}

const obj3= new Three();
obj3.getItem();


