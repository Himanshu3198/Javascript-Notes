console.log("letsBegin")

function myFunc(){
    document.getElementById("demo").innerHTML="learn javascript";
}

/* some useful onclick events
 window.print() use for printing the webpage
 alert() use for alert during page reload
*/

/* 4 way to declare js variable
  var,let,const,nothing
  differences bw them is
  var : global scope,can be update redeclare i,declared without
  initialization,can be accessed without initialization
  but shows undefined

  let : block,can be update but cannot redeclare in same scope 
  and cannot access without initialization

  const: block scope, cannot be updated or redeclared into the scope
  cannot be declare without initialization and cannot be accessed
  without initialization .
  
  nothing : no need to  declare type of variable just 
  name it


 
*/

//  ***********************objects************


const  car={
    type:"sedan",
    color:"black",
    price:"20Lac"
}

document.getElementById("demo").innerHTML="this is "+car.type+" color "+car.color+" price "+car.price;


const person={
    name:"himanshu",
    lastName:"sharma",
    fullName:function(){
        return this.name+" "+ this.lastName;
    }
}

document.getElementById("name").innerHTML=person.fullName();

/*  what is this keyword in javascript 
    it refers to object or pointing instance of an object
*/
