/** https://leetcode.com/problems/task-scheduler/

Task Scheduler

Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a
 different task. Tasks could be done in any order. Each task is done in one unit of time.
 For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks
(the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

Test Case 1
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation:
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

Test Case 2
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.

Test Case 3
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation:
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

Constraints:

1 <= task.length <= 104
tasks[i] is upper-case English letter.
The integer n is in the range [0, 100].

 */

// Solution 1

const leastInterval = (tasks, n, freq = new Array(26).fill(0)) => {

    for (let task of tasks) {
        freq[task.charCodeAt() - "A".charCodeAt()]++;
    }

    const fMax = Math.max(...freq);
    let nMax = 0;
    for (let count of freq) count === fMax && nMax++;

    return Math.max(tasks.length, (1 + n) * (fMax - 1) + nMax);
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8