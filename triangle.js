
// for (let i = 1; i <= 6; i++) {
//     let pattern = ""
//     for (let k = 1; k < i; k++) {
//         pattern += " * "
//     }
//     console.log(pattern);
// }        //Upprer left triangle



// let count = 1;
// for (let i = 1; i <= 6; i++) {
//     let pattern = ""
//     for (let k = 1; k <= 5; k++) {
//         pattern += count + " "
//         count++
//     }
//     console.log(pattern);
// }







// for (let i = 1; i <= 5; i++) {
//     let pattern = ""

//     for (let k = 1; k < 5; k++) {
//         if (k <= 5 - i) {
//             pattern = pattern + " "
//         }
//         else {
//             pattern = pattern + "*"
//         }
//     }
//     console.log(pattern);
// }    //Upper right triangle







// for (let i = 1; i < 6; i++) {
//     let pattern = ""
//     for (let k = 6; k > i; k--) {
//         pattern += " * "
//     }
//     console.log(pattern);
// }   // Lower left triangle





// for (let i = 1; i <= 10; i++) {

//     for (let j = 0; j < 10; j++) {
//         console.log(`${i}${j}`)


//     }
// }


// const arr = [1, 2, 3, 4, 5];  //[2,3,4,5,1]

// const newArr = arr.push(3)

// console.log(newArr);



const name = 'Alice';
const age = 25;

// Using template literals
const message = `My name is ${name} and I am ${age} years old.`;

console.log(message); // Output: My name is Alice and I am 25 years old.