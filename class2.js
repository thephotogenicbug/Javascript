class Two{
    constructor(){
        this.item=["Mango", "Apple", "Orange", "Papaya"];
        this.price=[300, 400, 250, 100];
    }
    getItem = () =>{
        console.log("Available Item :"+ this.item.length);
        this.item.map((xitem, index)=>{
            console.log(xitem + "-----" + this.price[index]);
        })
    }

  // getter: those function wer we apply get keyword function will convert into object
   get getItem2(){
        console.log("Available Item :"+ this.item.length);
        this.item.map((xitem, index)=>{
            console.log(xitem + "-----" + this.price[index]);
        })
    }
}

const obj2 = new Two();
obj2.getItem();
obj2.getItem2;