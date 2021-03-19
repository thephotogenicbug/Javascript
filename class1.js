class Test{
    constructor(){
       this.a=100;
       this.b=100;
    }

     getInfo = () =>{
         console.log("Working...");
         console.log(this.a + this.b);
     }
     static updateInfo = ()=>{
        
         console.log("Please wait updating..........")
     }
}
// object creator
const obj = new Test();

obj.getInfo();
Test.updateInfo();

// Static  Method 
class Test2{
   static setInfo = ()=>{
        console.log("Info Updated....");
    }
}

Test2.setInfo();

/*
  class : class is collections of member variables and member methods
  memeber variable : all the variables defined inside constructor using this operator
  memeber methods: all the user defined functions inside a class
  this : this will point to object of current class but inside the class
  constructor : it is life cycle method of oops that get called while instanciating a class.
  object : it is instance(copy) of a class
  extends : it used to inherit the feature of one class to other class
  implements : it used to inherit the feature of interface to a class
  static method : those methods starting with static keyword
                  can be called using classname.functionname()
  non static method : those function called by object .functionName()                

*/

