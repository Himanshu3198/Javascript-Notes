const letters=new Set(["a","ab","cd","F"]);
	
	// Add
	letters.add("cde");
	letters.add("g");
	// Iterate
	// letters.forEach((val)=>{
	// 	console.log(val);
	// })
	//  letters.values() return object set iterator
	let text="";
	// for(const x of letters.values()){
	// 	text+=x;
	// }
	// console.log(text);
	
	// size return of set
	// console.log(letters.size);
	
	// has() return true if present
	// console.log(letters.has("a"));
	// console.log(letters.has("k"));
	// delete element
	letters.delete("a");
	// console.log(letters.has("a"));
	
	//  reverse the set
	const nums=new Set([10,20,30,40,50]);
	// nums.forEach((val)=>{
	// 	console.log(val);
	// })
	var descen=[...nums].reverse();
	descen.forEach((val)=>{
		console.log(val);
	})
