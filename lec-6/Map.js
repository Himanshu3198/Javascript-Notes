  const fruits=new Map([["apple",200],["cheeku",100],["mango",400],["Pomegranate",300]]);
  fruits.set("banana",40);
  fruits.set("oranges",200);
  
//   get() return value
//   console.log(fruits.get("apple"));
//   size return size of Map
//  console.log(fruits.size)
//  has return true if present else false
 fruits.delete("apple");
//  console.log(fruits.has("apple"));
 
 let myFruit="";
 fruits.forEach((value,key)=>{
	 myFruit+=(key+"->"+value+" ");
 })
 console.log(myFruit);

//   entries() return object of [key,value]
  let text="";
	for(const x of fruits.entries()) {
		 text+=x;
	}
	console.log(text);
