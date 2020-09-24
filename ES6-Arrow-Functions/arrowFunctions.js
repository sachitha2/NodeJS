//normal function
function sum(a,b){
    return a+b;
};


//Arrow function
let sum2 =(a,b)=>a+b;

//normal function
function isPositive(number){
    return number >= 0
};


//Arrow function
let isPositive2 = number=>number >= 0;

//normal function
function randomNumber(){
    return Math.random();
};


//Arrow function
let  randomNumber2 = () =>  Math.random();


//normal function
//Anonymous 
// document.addEventListener('click',function(){
//     console.log('click');
// })


//Arrow fuction
// document.addEventListener('click',() => console.log('click'));

//normal functions
console.log(sum(1,2));
console.log(isPositive(2));
console.log(randomNumber());


//Arrow Functions
console.log(sum2(1,2));
console.log(isPositive2(2));
console.log(randomNumber2());
