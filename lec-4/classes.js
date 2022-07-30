class car{
    constructor(n,y){
        this.name=n;
        this.year=y;
    }
    age(){
        let date=new Date();
        return date.getFullYear()-this.year;
    }
}

let myCar=new car("bmw",2012);
console.log("my car is "+myCar.age()+" years old");
