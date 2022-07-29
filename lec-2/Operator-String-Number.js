
console.log("hehe");
/* difference bw == && === 
 == operator does type conversion before comparison
 while === compares values as well as data types of operands
 */

//   *******string************* 
 let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let length = txt.length;
 console.log(length);

 let part=txt.slice(7);
 console.log(part);
 let sub=txt.substr(2,5);
 console.log(sub);
 /* slice : return starting index to ending index
    substring: return values less than 0 as 0
    substr: second parameter specifies length of extrated part
*/

let t="hello world";
let newt=t.replace("world","himanshu");
console.log(newt);

//  trim remove white space
let s="     hs          ";
s=s.trim();
console.log(s);

// ******** string search*************************


let str = "Please locate where 'locate' occurs!";
let idx1=str.indexOf("locate");
let idx=str.lastIndexOf("locate");
console.log(idx);
console.log(idx1);

//  str.match() use of regx 
let text = "The rain in SPAIN stays mainly in the plain";
//  document.getElementById("demo").innerHTML =text.match(/ain/gi);


 // other functions are boolean startWith endWith

//   ******************template literals****************

let newname="himanshu sharma";
let html=`hello my name is ${newname}`;
document.getElementById("name").innerHTML =html;


//  *****************numbers********************

let num=12.25252;
//  it shows digits after decimal
// num=num.toFixed(3);

num=num.toPrecision(5);
// this round up value after particular len
console.log(num);

/* other function 
parseInt: parse argument to integer
POSITIVE_INFINITY,NEG...
*/
