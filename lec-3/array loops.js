console.log("-_-");
const cars = ["BMW", "Volvo", "Saab", "Ford"];

 let text="";
 for(let i=0;i<cars.length;i++){
      text+=cars[i]+"<br>";
 }

 document.getElementById("name").innerHTML=text;

//   for in loop : loops through properties of object


const num=[13,25,2,22,11];
num.sort(function(a,b){return a-b});
//  array.sort() sort on basis of string

// for(let x in num){

//     console.log(num[x]);
// }

//  for each loop in js

num.forEach(myFunc);
function myFunc(value,index,array){
    console.log(value);
}

const fruits=["apple","banana","mango"];

// fruits.forEach(func);

// function func(item){
//     console.log(item);
// }


//  for of loop :iterate over ds like array string map


// for(let x of fruits){
//     console.log(x);
// }
