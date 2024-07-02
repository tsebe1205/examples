const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
            // min = j
            let temp = arr[j];
            arr[j] = arr[min];
            arr[min] = temp;

        }



    }

}
console.log(arr);