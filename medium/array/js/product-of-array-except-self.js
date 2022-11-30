/** https://leetcode.com/problems/product-of-array-except-self/

Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Test Case 1
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Test Case 2
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

// Solution 1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums, res = [], product = 1, zeros = 0) => {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) zeros++;
        else product = product * nums[i];
    }
    if (zeros > 0) {
        if (zeros > 1) return nums.fill(0);
        else {
            let index = nums.indexOf(0);
            nums.fill(0);
            nums[index] = product;
        }
        return nums;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) res.push(product);
        res.push(product / nums[i]);
    }
    return res;
};

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
