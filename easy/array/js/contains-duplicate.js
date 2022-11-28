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


// Solution 1 - Set is used
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length;

containsDuplicate([1, 2, 3, 1]); // true

// Solution 2 - object is used with for loop

const containsDuplicate2 = nums => {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]
        if (obj[currentValue] !== undefined) return true
        else obj[currentValue] = currentValue
    }

    return false
};

containsDuplicate2([1, 2, 3, 4]); // false

// Solution 3 Map is used with for of

const containsDuplicate3 = nums => {
    let map = new Map()
    for (let k of nums) {
        if (map.get(k) === undefined) {
            map.set(k, true)
        } else {
            return true
        }
    }
    return false
};

containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true