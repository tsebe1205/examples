// const arr = ['a', 'b', 'c', 'd', 'e']
// const newArr = arr.map((element, index) => {
//     console.log(element, index);
//     return element + "hello"
// });

// console.log(newArr);


//........//


// const arr = ["a", "b", "c", 1, 2, 3]
// const newArr = arr.map((element, index) => {
//     // console.log(typeof element);
//     if (typeof element === "string") {
//         return element + "hello"
//     }
//     // else { return element * 10 }
//     return element * 10
// })
// console.log(newArr);


//..........//

// const arr = ["a", "b", "c", 1, 2, 3]

// const newStr = []
// const newNum = []

// for (let i = 0; i < arr.length; i++) {
//     if (typeof element === "string") {
//         newStr.push(arr[i])
//     }
//     newNum.push(arr[i])

// }
// console.log(newStr);



//.....//

// const newArr = arr.map((element, index) => {

//     if (typeof element === "string") {
//         newStr.push(element)
//         return
//     }

//     newNum.push(element)
// })
// console.log(newStr);
// console.log(newNum);



//..............//


// const person = {
//     name: "tserenpuntsag",
//     age: 35,
//     gender: "male",
//     height: 170,
//     weight: 65,
//     siblings: 3,
//     job: "Uscc"
// }
// console.log(person.age);



//....///



const board = [
    {
        title: "todo",
        bgcolor: "white"

    },
    {
        title: "ss",
        bgcolor: "orange"

    },
    {
        title: "Done",
        bgcolor: "green"
    },
    {
        title: "Blocked",
        bgcolor: "red"
    }

]

board.map((el) => {
    board()
})

//......//




// let company = {
//     name: "Pinecone",
//     location: "3gol",
//     classes: [
//         {
//             className: "1a",
//             teacher: [
//                 { name: "teacher1", position: "instructure" },
//                 { name: "teacher2", position: "cs" }
//             ],
//             student: [
//                 { name: "student1", age: 20, gender: "male" },
//                 { name: "student2", age: 23, gender: "female" },
//                 { name: "Oyutan", age: 24, gender: "male" },
//                 { name: "student4", age: 20, gender: "male" },
//                 { name: "student1", age: 31, gender: "male" },
//                 { name: "student5", age: 32, gender: "male" }

//             ]
//         },
//         {

//             className: "1b",
//             teacher: [
//                 { name: "Batmunkh", position: "instructure" },
//                 { name: "BatOrgil", position: "cs" }],
//             student: [
//                 { name: "student1", age: 20, gender: "male" },
//                 { name: "student2", age: 20, gender: "female" },
//                 { name: "student3", age: 24, gender: "male" },
//                 { name: "student4", age: 20, gender: "male" },
//                 { name: "student1", age: 30, gender: "male" },
//                 { name: "student5", age: 35, gender: "male" }]
//         }
//     ]
// }
// console.log(company.classes[0].student[0].age);
// console.log(company.classes[0].student[4].age)




// const student = company.classes[0].student
// let sum = 0

// for (let i = 0; i < student.length; i++) {
//     sum += student[i].age
// }
// console.log(sum / student.length);


// company.classes[0].student[0].name = 'saraa'
// console.log(company.classes[0].student[0].name[0]);

// console.log(Object.keys(company));
// console.log(Object.values(company));
// console.log(company['location']);



//.........//

const company = {
    num1: 14,
    num2: 22,
    num3: 10,
    num4: 12,
    sum: 0
};

// console.log(company.num1);
// console.log(company.num2);
// company.sum = company.num1 + company.num2
// console.log(company.sum);

// company.urjver = company.num1 * company.num1;
// console.log(company.urjver);

// console.log(Object.values(company));


//.....//

const arr = Object.values(company)
company.mul = 1

// arr.map((el, index) => {
//     if (index === arr.length - 1) {
//         return
//     }
//     company.sum += el;
//     company.mul *= el;

// })

for (let i = 0; i < arr.length - 1; i++) {
    company.sum += arr[i]
    company.mul *= arr[i]
}


console.log(company);

