/** https://leetcode.com/problems/maximum-subarray/

Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Test Case 1
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Test Case 2
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Test Case 3
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

 */


// Solution 1

const maxSubArray = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6

