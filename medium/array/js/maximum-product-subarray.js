/** https://leetcode.com/problems/maximum-product-subarray/

Maximum Product Subarray

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Test Case 1
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Test Case 2
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

// Solution 1

const maxProduct = (nums) => {
    let mini, maxi, res;
    mini = maxi = res = nums[0];

    for (let num of nums.slice(1)) {
        const currMini = Math.min(num, num * maxi, num * mini);
        const currMaxi = Math.max(num, num * maxi, num * mini);
        maxi = currMaxi
        mini = currMini
        res = Math.max(res, maxi)
    }

    return res
};

console.log(maxProduct([2, 3, -2, 4])) // 6

// Solution 2

const maxProduct2 = (nums) => {
    if (nums.length === 1) return nums[0];
    let result = nums[0];
    let max = result;
    let min = result;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }
        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);
        result = Math.max(result, max);
    }
    return result;
};

console.log(maxProduct2([2, 3, -2, 4])) // 6