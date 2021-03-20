class Customer{
      constructor(){
          this.name = "Naveen";
          this.age = "25 Years";
          this.email = "xyz@xyz.com";
          this.number = "9008006228";
      }
      AboutCustomer(){
          console.log("Full Name :"+this.name);
          console.log("Age :"+this.age);
          console.log("Email :"+this.email);
          console.log("Mobile :"+this.number);
      }
}
class Address extends Customer{
    constructor(){
        super();
        this.city = "Bangalore";
        this.address = "Marathalli";
        this.pincode = "560037";
    }

}

class userDetails extends Address{
    constructor(){
        super();

    }
    getInfo = ()=>{
        this. AboutCustomer();
        console.log("----------Address---------");
        console.log("City :"+this.city);
        console.log("Address:"+this.address);
        console.log("Pincode:"+this.pincode);
    }

}
const obj4 = new userDetails();
obj4.getInfo();