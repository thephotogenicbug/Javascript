//const fetch = require("node-fetch");
class Three
{
   
    constructor(){
        this.item = [];
    }

    async getItem(){
        await fetch("item.json")
        .then(response=> response.json())
        .then(result => this.printData(result))
    }
    printData(datalist){
     var data = "<h2> City List </h2>";
     datalist.map((xcity, index)=>{
         data = data + "<p>" + index + "."+ xcity + "</p>";
     })
     document.getElementById("container").innerHTML = data;
    }

    async getCity(){
        await fetch("http://firstenquiry.com/api/react/live/allcity.php")
        .then(response=> response.json())
        .then(result => this.printCity(result))
    }
    printCity(datalist){
     var data = "<h2> City List </h2>";
     datalist.map((xcity, index)=>{
         data = data + "<p>" + xcity.id + "."+ xcity.name + "</p>";
     })
     document.getElementById("container").innerHTML = data;
    }
}

const obj3= new Three();



