/////////////////////////// let const and var
// function sayHello(){
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// sayHello();

// Objects are key value paire and this keyword is always refernce current object in js or es6
// const persone = {
//     name: 'Aqib Jabbar',
//     walk() {
//         console.log(this);
//     },
//     workTime() { }
// }

// persone['name'] ='Aqib';
// console.log(persone.name);
// const walk = persone.walk;
// console.log(walk);

// /////////////// Arrow Functions and bind method check

// const square = number => number*number;
// console.log(square(8));

// var addedNumber = (num1, num2) => {
//     var result = num1 + num2;

//     console.log(result);
//     return result;
// }

// console.log(addedNumber(3, 4));


// filter 

// const jobs =[
//     {id:1, isActive:true},
//     {id:2, isActive:true},
//     {id:3, isActive:false}
// ]
// const activeJobs=jobs.filter(job=>job.isActive);
// console.log(activeJobs);


//////////////////////////////// for/of loop

// const cars = ['BMW','KIYA','Honda'];
// for (car of cars){
//     console.log(car);
// }

// const language ="BSCS";
// for(let x of language){
//     console.log(x);
// }

////////////////////////// Map

// const names = ['aqib','asim','tayyeb'];
// var items=names.map(name=>`<li>${name}</li>`);
// console.log(items);

//////////////// Object Destructure 

// const car = {
//     name:"name",
//     color:'blue',
//     brand:'BMW'
// }
// const { name, color, brand} =car;
// console.log(color,brand,car.name);

////////////////////////////// spread operator


// const six = [1,2,3,4,5,6];
// const seven = ['one','two','three','four','five','six'];
// const combined = [...six,...seven,'seven'];
// console.log(combined);


//////////////////////// class 

// class Car {
//     constructor(name,year,model){
//         this.name=name,
//         this.year=year,
//         this.model=model

//     }
//     speed(){
//         console.log(`This ${this.name} is inaugurated in ${this.year} and model is ${this.model}.`)
//     }
// }
// const result = new Car('BMW',2020,1996);
// console.log(result);
// console.log(result.speed());

// class Bike extends Car {
//     constructor(name,year,model,price){
//         super(name,year,model);
//         this.price=price;
//     }
// }
// const bikeInfo = new Bike("Honda-CD",2020,2010,80000);
// console.log(bikeInfo);
// console.log(bikeInfo);


////////////////////// Promise
// reolve or reject

// const myPromise = new Promise((res,rej)=>{
//     setTimeout(function(value){
//         res("Hy Promise resolved!!")
//     },3000)
// })
// myPromise.then(function(value){
//     console.log("CODE IS SUCCESSFULL AFTER 3 SECONDS!!" + value)
// }
// )

/////////////////////////////// Symbol

// const person = {
//     name:'Aqib',
//     dob:1996
// }
// const id = Symbol('id');
// person[id]=9090;
// console.log(person);


///////////////////////////// default parameter

// function info(name='aqib',father){
//     console.log(`this is default parameter and ${name} and father name is ${father}`)
// }
// info(this.value,'jabbar')


///// ////////////////////rest parameter

// function sum(...args){
//     let sum=0;
//     for (let arg of args) sum +=arg;
//     return sum;
// }

// const resutlt = sum(1,2,3,4,5,6);
// console.log(resutlt)


/////////////////////////////// string includes

// let text = "My name is Aqib Jabbar";
// var result=text.includes("Jabbar");
// console.log(result);




// ///////////////////////////////////////// string start with


// let text = "My name is Aqib Jabbar";
// var result = text.startsWith("My");
// console.log(result);

// ///////////////////////////////////////// string start with
// let text1 = "My name is Aqib Jabbar";
// var result1 = text1.endsWith("Jabbar");
// console.log(result1);



//////////////////////////////////////////// Array.from


// var array = Array.from('7678asl;dksadl86876');
// console.log(array);




//////////////////////////////////////////// Array.keys();

// const array = [1,2,3,4];
// var res = array.keys();
// var text = "";
// for (let i of res){
//     text +=i;
// }

// console.log(text);

// ////////////////////// array.find()

// // let array = [1,23,4,90,6,745,4,];
// // let result = array.find(finder);

// // function finder(value,index){
// //     console.log(index);
// //     return value >90;
// // }
// // console.log(`${result}`);


// ///////////////////////////////// ARRAY,FINDINDEX
// let array = [1,23,4,90,6,745,4,];
// let result = array.findIndex(finder);

// function finder(value){
//     // console.log(index);
//     return value >90;
// }
// console.log(`${result}`);

/////////////////////////////Math Property or Methods

// var math = Math.trunc(2.9);
// var math = Math.trunc(2.4);
// var math = Math.sign(8);
// var math = Math.cbrt(125);
// var math = Math.log2(10);
// var math = Math.log10(100);
// var math = Math.log10(100);

// console.log(math);


// ///////////////////////////// New Number Propertie

// let x = Number.MIN_SAFE_INTEGER;
// let x = Number.MAX_SAFE_INTEGER;
// let x = Number.EPSILON;
// console.log(x);



// ///////////////////////////// New Number Methods
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

// var x = Number.isInteger(21.2);
// var x = Number.isSafeInteger(2100000000000000);
// console.log(x);

// ///////////////////////////// New Global Methods

// var x = isFinite(10/0);
// var x = isFinite(10/1);
// var x = isNaN('sad');
// console.log(x);

//////////////////////////////////////////////////////// ECMA_SCRIPT 2016/////////////////////////////

// ECMAScript 2016
// The JavaScript naming convention started with ES1, ES2, ES3, ES5 and ES6.

// But, ECMAScript 2016 and 2017 was not called ES7 and ES8.

// Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018).

// JavaScript Exponentiation (**)
// JavaScript Exponentiation assignment (**=)
// JavaScript Array.prototype.includes

// exponentiation

// let x = 3;
// let y = x ** 4;
// let y = Math.pow(3,3);

// let x = 7;
// let res =  x **= 3;


// console.log(res);




/// /////////////////////////////////// ECAM-2017 //////////////////////////////


// JavaScript String padding
// JavaScript Object.entries
// JavaScript Object.values
// JavaScript async functions
// JavaScript shared memory


// let x = "3";
// let result = x.padStart(4,1);
// let result = x.padEnd(4,1);
// console.log(result);





///////////////////////////////////////// Object.entries and object.values are same but difference is it only give values not key values


// const person = {
//     name:'aqib',
//     age:20,
//     sex:"male"
// }
// let text = "";
// for (let [info,value] of Object.entries(person)){
    //     text += `${info}:${value}; `
    // }
    // let rest = text;
    
    // console.log(rest);
    // console.log(result);
    
    // let text = "";
    // for (let value of Object.values(person)){
    //     text += `${value}; `
    // }
    // console.log(text);
// Object



// /////////////////////////// async and await fun in ecamascript-2017

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//    console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
     
    // expected output: "resolved"
//   }
  
  asyncCall();