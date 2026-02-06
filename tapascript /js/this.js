// "using strict";

// using the strict keyword will ensure the this is undefined in the global scope 


// IMPLICIT BINDING


// const employee = {
//     name: "pam",
//     id: "004",
//     age: 24,

//     // an arrow function does not have its own 'this' context
//     returnsThis: function() {
//         return this;
//     },

//     getFullDetails: function(){
//         return  `name is ${this.name} id is ${this.id} age is ${this.age}`;
//     }
// }

// console.log("employee age: ", employee.age);
// console.log("employee name: ", employee.returnsThis());
// console.log("employee full details: ", employee.getFullDetails());


// const tom = {
//     name: "Tom",
//     age: 7,
// }

// const jerry = {
//     name: "Jerry",
//     age: 4
// }

// function testObj(obj){
//     obj.logTest = function(){
//         console.log(`name is ${this.name} age is ${this.age}`);
//     }


//     console.log(obj);
// }

// testObj(tom);
// tom.logTest();


// this shows that the "THIS" keyword is not binding to a function itself but rather to the global scope
// function sayName(){
//     console.log("this is a function to say name", this);
// }

// sayName();

// function sayHello(){
//     console.log("outer this:", this);

//     return function(){
//         console.log("inner this:", this);
//     }
// }

// const returnThis = sayHello();
// returnThis();


// const fruit = {
//     name: "Mango",
//     color: "yellow",

//     getDes: ()=> {
//         return `${this.name} is ${this.color} in color`;
//     }
// }

// this will return undefined because arrow functions do not have their own 'this' context

//one wey to fix this is to use regular function instead of arrow function
// console.log(fruit.getDes());

const fruitFixed = {
    name: "Mango",
    color: "yellow",
    
    getDes: function() {
        return () => {
            return `${this.name} is ${this.color} in color`;
        };
    }
}

const desFixed = fruitFixed.getDes();
console.log(desFixed());

// EXPLICIT BINDING


// Explicit binding is binding your value. of THIS to something unrelated.     
// this is usually used when u want to refer being in 
//  one execution context from another execution context and you want
// to bind both execution. context

function greeting(){
     console.log(`${this.name} stays at ${this.city}`);
}

const user = {
    name: "pam",
    city: "Abuja"
}

greeting.call(user);  // using call method to explicitly bind the this keyword to user object
greeting.apply(user, ["lucky", "abuja"]); // using apply method to explicitly bind the this keyword to user object

const boundGreeting = greeting.bind(user); // using bind method to explicitly bind the this keyword to user object
boundGreeting();

// using the this with parameters
function likes(food1, food2){
    console.log(`${this.name} likes ${food1} and ${food2}`);
}

const person = {
    name: "pam"
}

likes.call(person, "beans", "yam");


const foodArray = ["rice", "chicken"];
likes.apply(person, foodArray);


/*
    call used for arguments list
    apply used for array of arguments
    bind used to create a new function with the this keyword bound to a specific value
*/
