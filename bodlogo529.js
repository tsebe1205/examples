// const arr = [12, 13, 4, 1, 0, -12];

// let min = arr[0];


// for (let i = 1; i < arr.length; i++) {

//     if (min > arr[i]) {
//         min = arr[i]
//     }

// } console.log(min);




// const arr = [12, 13, 4, 1, 0, -12, 100];

// let max = arr[0];


// for (let i = 1; i < arr.length; i++) {

//     if (max < arr[i]) {
//         max = arr[i]
//     }

// } console.log(max);



// const arr = [12, 13, 4, 1, 0, -12, 100];

// let max = arr[0];

// let min = arr[0]


// for (let i = 1; i < arr.length; i++) {

//     if (max < arr[i]) {
//         max = arr[i]
//     }

//     if (min > arr[i]) {
//         min = arr[i]
//     }

// } console.log(max, 'max', min 'min' );




const arr = [111, 2, 3, -111, -2, -44]

for (let index = 0; index < arr.length; index++) {

    for (let i = 0; i < arr.length - index; i++) {

        if (arr[i] > arr[i + 1]) {

            const temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp

        }

    }

}

console.log(arr);

