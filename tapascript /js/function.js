// function is a block of reusable code used to avoid repetition

// function as an expression

const func = function (){
    console.log('function as an expression');

}

func();

// return
// the return keyword is used in a function when you need a result in. the. function outside the function

function add(a, b){
    const result = a + b;
    return result;
}


const result = add(2, 3);


function multiply(a, b){
    const myResult = a + b;
    const multiply = result * myResult;

    console.log(multiply);
}

multiply(2, 2);

// default parameters

function defaultParam(a=0, b=5){
    return a + b;
}

console.log(defaultParam());

// rest parameter
// when there are many parameters whichis. dynam
// you can define the ones u know and store the rest in a rest parameter
// the values are saved in an array

function restParam(a, b, ...rest){
    return a + b;
}

console.log(restParam(5, 2, 2, 3, 4, 5));

// nested function
// a function inside another function is called a nested function

function outer(){
    console.log("outside function");

    function inner(){
        console.log("inner");

    }

        inner();
}

outer();

// callback function

// this is a function that can be passed as an argument of another function and called at any time
// callback functions are usually used with conditions
const isTrue = false
function callBack(fun){
    console.log("function details")

   if(isTrue){
        fun(); 
   }
}

callBack(function(){
    console.log("callback");
});

// higher order function (HOF)
// this is a function that takes a function as a parameter and returns another function from it


function getCamera(camInfo){
    camInfo();
}

getCamera(function(){
    console.log("sonny");
});


function retFunc(){
    return function greeting(){
        console.log("hello")
    }
}

const newFunc = retFunc();
newFunc();


// IIFE (Immediately Invoked Function Expression)
// this is a function that is invoked immediately after it is defined

(function(){
    console.log("IIFE");
})();

