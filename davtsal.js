const nums2 = [1, 1, 2]; //[1,"_",2]

const nums = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7,]; //[1, "_", "_", 2, "_", 3]

let k = 1;

for (let i = 1; i < nums.length; i++) {

    if (nums[i] == nums[i - k]) {
        k++;
        nums[i] = "_";
        continue;


    }
    k = 1;
}
console.log(nums);

