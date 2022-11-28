/** https://leetcode.com/problems/contains-duplicate/

Contains Duplicate

Test Case 1
Input: nums = [1,2,3,1]
Output: true

Test Case 2
Input: nums = [1,2,3,4]
Output: false

Test Case 3
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

 */


// Solution 1

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length;

containsDuplicate([1, 2, 3, 1]); // true