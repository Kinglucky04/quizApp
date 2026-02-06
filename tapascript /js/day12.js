const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// the ?? is a nullish operator i.e it checks for null or undefined
// since age is undefined it will return "Not provided"


const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// an object can not be modified after being frozen

// const person = {
//   name: "Tapas",
//   company: {
//     name: "tapaScript",
//     location: {
//       city: "Bangalore",
//       zip: "94107"
//     }
//   }
// };

// const {name, company, company : {location: {city}}} = person;

// console.log(location);

const students = {
   student1 : {name: "pam",
   age: 23,
   grade: {
        math: "A",      
        science: "B",
        english: "A"
   }
},
   student2 : {
    name: "jim",
    age: 22,
    grade: {
        math: "B",      
        science: "C",
        english: "B"
   }
   },
   student3 : {
        name: "dwight",
        age: 24,
        grade: {
            math: "A",      
            science: "A",
            english: "A"
    }
}
};


function calculateaverageGrade(students){
    const grades = Object.values(students).map(student => student.grade);
    const totalStudents = grades.length;
    const subjectTotals = {};
    
    grades.forEach(grade => {
        for (const subject in grade) {
            if (!subjectTotals[subject]) {
                subjectTotals[subject] = 0;
            }
            subjectTotals[subject] += grade[subject] === "A" ? 4 : grade[subject] === "B" ? 3 : grade[subject] === "C" ? 2 : 1;
        }
    });
    
    const averageGrades = {};
    for (const subject in subjectTotals) {
        averageGrades[subject] = (subjectTotals[subject] / totalStudents).toFixed(2);
    }
    
    return averageGrades;
}
console.log(calculateaverageGrade());


const books = {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    publication: {
        year: 1997,
        publisher: "Bloomsbury"
    }
}
