
const arr = [1, 2, 3, 4, 5];  //[2,3,4,5,1]

const newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])

}
newArr.push(arr[3])