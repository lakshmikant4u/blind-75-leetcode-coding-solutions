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
const containsDuplicate = nums => new Set(nums).size !== nums.length; // or nums => nums.length > new Set(nums).size

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
        if (map.has(k)) {
            return true
        } else {
            map.set(k, true)
        }
    }
    return false
};

containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true

// Solution 4 Sorted and checked with consecutive numbers

const containsDuplicate4 = nums => {
    nums.sort((a, b) => a - b)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) return true
    }
    return false
}

containsDuplicate4([1, 3, 2, 4]); // false

// Solution 5 Brute Force - Linear Search

const containsDuplicate5 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue;
            if (nums[i] == nums[j]) return true;
        }
    }
    return false;
};

containsDuplicate5([1, 3, 2, 4]); // false