// // for(let i = 1; i <= 5; i++){
// //     console.log("*");
// // }

// // assignnment print a pyramid shape of stars

// const user = [
//     {
//         username: "pam",
//         password: "1234"
//     }
// ];

// const newsFeed = [
//     {
//         username: "Pam",
//         post: "Just another guy"
//     },{
//         username: "lucky",
//         post: "just a random dude that's not cool"
//     }

// ];


// const userNamePrompt = prompt("enter user name");
// const passwordPrompt = prompt("enter password");

// function signIn(username, password){
//     if(username === user[0].username && password === user[0].password){
//          console.log(newsFeed[0]);  
//     }else{
//        alert("sorry wrong username and password");
//     }
// }

// signIn(userNamePrompt, passwordPrompt);



function scope(){
    var task = "writing.....";
    // console.log(task);
    return task;
}

// scope();

// console.log(task);

// // closures


 function createAccount (initialBalance){
            balance = initialBalance;

            return {
                deposit : (amount) => {
                    if(amount <= 0){
                        alert("amount to deposit can't be 0 or less")
                        return
                    }else{
                        balance += amount
                    }
                },

                withdraw : (amount) => {
                    if(amount > balance){
                        alert("insufficient funds")
                        return
                    }else if(amount <= 0){
                        alert("can't withdraw 0")
                        return
                    }else{
                        balance -= amount;
                    }
                },

                    checkBalance : () => {
                        console.log("your balance is " + balance);
                }

            }   
        }

        const accountCreation = createAccount(100);

        console.log(accountCreation);

        accountCreation.deposit(500);
        accountCreation.withdraw(10);
        console.log(balance);


        // Objects
        // saving objects from a user input

        // let fruits = prompt("what is your fav fruit");
       

        // let favFruits = {
        //     [fruits] : "lovely"
        // }

        // console.log(favFruits);


        // constructor function

        // a constructor funnction is a special type of function used to create an object;
        // the name of the function should begin with a capital letter
        //  use the this keyword to make reference to the arguments

        // function Cars(name, model, year) {
        //     this.name = name;
        //     this.model = model;
        //     this.year = year;
        // }


        // const newCar = new Cars("ford", "mustang", 2024);

        // console.log(newCar);

        //factory function
        // function person(name, age){
        //     return {
        //         name,
        //         age,
        //         // do this only when the parameter and the key are the same
        //     }
        // }

        // let profile = {
        //     name: "pam",
        //     company: "cultured People",
        //     greet: function(){
        //         console.log(`hello  ${this.name} works with ${this.company}`);
        //     }
        // }

        // // console.log(profile.greet());


        // for(let key in profile){
        //     console.log(key);
        //     console.log(profile[key]);
        // }


        // let fruits = {
        //     apple: 150,
        //     banana: 100,
        //     mango: 200
        // }

        // let fruity = {
        //     apple: 150,
        //     banana: 100,
        //     mango: 200
        // }

        // if(fruits.apple === fruity.apple){
        //     console.log("they are equal");
        // }else{
        //     console.log("not equal");
        // }


        // const obj = {
        //     names: "pam",
        //     age: 25
        // }


        // const obj2 = Object.assign({}, obj);
        // obj2.names = "lucky";

        // console.log(obj);
        // console.log(obj2);

        // const obj3 = structuredClone(obj);
        // obj3.names = "dave";
        // obj3.age = 50;

        // console.log(obj3);
        // // const myEntries = Object.entries(obj);

        // console.log(myEntries);

        // const newEntries = new Map([
        //     ["name", "pam"],
        //    [ "age", 25]
        // ]);

        // const typeEntries = Object.fromEntries(newEntries);

        // console.log(typeEntries);

    // the freeze method is used to prevent any changes to an object
    const person = {
        name: "pam",
        age: 25
    };

    Object.freeze(person);

    person.name = "lucky";
    person.age = 30;

    console.log(person);


    // the seal method prevents adding or deleting properties from an object but allows modification of existing properties
    const car = {
        name: "ford",
        model: "mustang"
    };

    Object.seal(car);

    car.name = "chevrolet"; // allowed
    delete car.model; // not allowed
    car.year = 2024; // not allowed


    // hasOwn property method checks if an object has a specific property
    const laptop = {
        brand: "dell",
        model: "xps 13"
    };

    console.log(laptop.hasOwnProperty("brand")); // true
    console.log(laptop.hasOwnProperty("year")); // false