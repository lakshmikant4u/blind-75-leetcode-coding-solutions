/** https://leetcode.com/problems/rotate-array/
 
Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

Test Case 1
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Test Case 2
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
const rotate1 = (nums, k) => nums.unshift(...nums.splice(-k % nums.length));
rotate1(nums, k)
console.log(nums)

const rotate2 = (nums, k) => nums.push(...nums.splice(0, nums.length - k % nums.length));

const rotateByBounds = (nums, l, r) => {
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l += 1;
        r -= 1;
    }
};

const rotate3 = (nums, k) => {
    k = k % nums.length;

    rotateByBounds(nums, 0, nums.length - 1);
    rotateByBounds(nums, 0, k - 1);
    rotateByBounds(nums, k, nums.length - 1);
};

const rotate4 = function (nums, k) {
    k = k % nums.length;
    const lastK = nums.slice(nums.length - k);
    for (let i = nums.length - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = lastK[i];
    }
};

// create a function to reverse the arrary with a start index and end index. Two-pointer technique
const reverse = (array, start, end) => {
    // check for inputs
    if (!array || !array.length || start >= end) return;

    // perform reversing
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

const rotate5 = function (nums, k) {

    if (!nums || !nums.length) return;

    if (nums.length == 1) return nums;

    if (k > nums.length) k = k % nums.length;

    if (k > 0) {
        // first reverse the entire array
        reverse(nums, 0, nums.length - 1);
        // next reverse the k elements
        reverse(nums, 0, k - 1);
        // finally, reverse the elements after our k elements. 
        reverse(nums, k, nums.length - 1);
    }
    return nums;
};

