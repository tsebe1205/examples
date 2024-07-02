const nums1 = [1, 2, 2, 1, 3];

const nums2 = [2, 2, 3];

let s = [];




for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = 0; j < nums2.length - 1; j++) {
        if (nums1[i] === nums2[j]) {
            s.push(nums1[i]);
            break;


        }

    }

}
console.log(s);









// const nums1 = [1, 2, 3, 3, 2, 1];
// const nums2 = [2, 2];

// const intersection = nums1.filter(num => nums2.includes(num));

// console.log(intersection);







// nums1 = [1, 2, 3]
// nums2 = [2, 4, 6]



// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {

//         if (num[i] != num[j]) {
//             print([num1, num2])

//         }


//     }
//     console.log([num1, num2]);
// }

