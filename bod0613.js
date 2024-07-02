const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
let mul = 1
const newArr = arr.forEach((element, index) => {

    if (element % 2 === 0) {
        sum += element
    }
    else { mul *= element }





});
console.log(sum, mul);