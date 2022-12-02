/** https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

Minimum Rounds to Complete All Tasks

You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. 
In each round, you can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

Test Case 1
Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2. 
- In the second round, you complete 2 tasks of difficulty level 3. 
- In the third round, you complete 3 tasks of difficulty level 4. 
- In the fourth round, you complete 2 tasks of difficulty level 4.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

Test Case 2
Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, 
you can only complete either 2 or 3 tasks of the same difficulty level. 
Hence, you cannot complete all the tasks, and the answer is -1.

Constraints:

1 <= tasks.length <= 105
1 <= tasks[i] <= 109
 */

// Solution 1

/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks, map = new Map()) => {
    let res = 0;
    for (let i = 0; i < tasks.length; i++) {
        map.set(tasks[i], (map.get(tasks[i]) !== undefined ? (map.get(tasks[i]) + 1) : 1))
    }
    const iterator = map.values();
    for (const value of iterator) {
        if (value < 2) return -1;
        let temp = parseInt(value / 3) + (value % 3 !== 0 ? 1 : 0);
        res += temp;
    }
    return res;
};

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])) // 4

console.log(minimumRounds([2, 3, 3])) // 4
