/** https://leetcode.com/problems/search-in-rotated-sorted-array/

Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Test Case 1
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Test Case 2
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Test Case 3
Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

 */

// Solution 1 Binary Search

const search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.ceil(left + (right - left) / 2);
        if (nums[mid] == target) return mid;

        if (target < nums[mid] && (target >= nums[left] || nums[mid] < nums[right])
            || target >= nums[left] && nums[left] > nums[mid]
        ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4


// Solution 2 Brute Force

const search2 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(target)) {
            if (nums[i] === target) {
                return i
            }
        } else {
            return -1
        }
    }
};

console.log(search2([4, 5, 6, 7, 0, 1, 2], 3)) // -1


