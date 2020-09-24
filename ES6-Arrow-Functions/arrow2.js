class Person{
    constructor(name){
        this.name = name;
    }

    printNameArrow(){
        setTimeout(()=>{
            console.log("hello arrow:"+this.name)
        },1000)
    }

    printNameFunction(){
        setTimeout(function(){
            console.log("hello function:"+this.name)
        },1000)
    }
}


let person = new Person('Bob');

person.printNameArrow();

person.printNameFunction();

console.log(this.name);

//Arrow function can read local variables;
//but functions looking for thiyena thana variables. not inside the CLASS