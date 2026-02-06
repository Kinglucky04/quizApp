// try{
//     console.log("Hello");
//     abc;

//     console.log("This won't run");
// }catch(err){
//     console.log("there's been an error");
//     console.log(err);
// }

function divideNumbers(a, b){
    try{
        if(b === 0){
            const error = new Error("cannot divide a number by zero");
            throw error
        }

        const result = a / b;
        console.log(`the result is: ${result}`);
    }catch(error){
        console.error(`an error occurred: ${error.message}`);
    }
}

divideNumbers(10, 2);
divideNumbers(10, 0);

const person = {
    name: "John",
    address: {
        city: "Abuja"
    }
}

function getPostalCode(person){
    try{
        console.log(person.address.country.postalCode);
    }catch(error){
        console.error("could not get postal code:", error.message);
    }
}

getPostalCode(person);

function validateAge(age){
    try{
        if(isNaN(age)){
            const error = new Error("Age must be a number");
            throw error;
        }

        console.log("Age is valid:", age);
    }catch(error){
        console.error("Invalid age:", error.message);
    }
}

validateAge(25);
validateAge("twenty five");

// Rethrow

function validateData(form){
    try{
        if(!form.name){
            const error = new Error("Name is required");
            throw error;
        }
        if(!form.email.includes("@")){
            const error = new Error("Email is required");
            throw error;
        }
    }catch(error){
        console.error("Validation error:", error.message);
        throw error; // Rethrow the error for further handling
    }
}

try{
    validateData({ name: "Lucky", email: "luckypam"});
}catch(error){
    console.error("Form submission failed:", error.message);
}

// Finally
// The finally block will always execute regardless of whether an error occurred or not.
// this should be. used when dealing with resources that need to be released or cleaned up. e.g closing a file or database connection.
function processInformation(information){
    try{
        console.log("Processing information:...");
        if(!information){
            const error = new Error("No information provided");
            throw error;
        }
        console.log("Information processed successfully");
    }catch(error){
        console.error("Error processing information:", error.message);
    }finally{
        console.log("Execution of processInformation is complete.");
    }
}

processInformation("Lucky fucking Pam");

// custom errors

function ValidationError(message){
    this.name = "ValidationError";
    this.message = message;
    this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function ValidateSeniorCitizen(age){
    try{
        if(age < 60){
            const error = new ValidationError("Age must be 60 or older to be a senior citizen");
            throw error;
        }

        console.log("Valid senior citizen age:", age);
    }catch(error){
        console.error(`${error.name}: ${error.message}`);
    }
}

ValidateSeniorCitizen(55);
ValidateSeniorCitizen(65);
