/** https://leetcode.com/problems/bus-routes/

Bus Routes
You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

Test Case 1
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

Test Case 2
Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1

Constraints:

1 <= routes.length <= 500.
1 <= routes[i].length <= 105
All the values of routes[i] are unique.
sum(routes[i].length) <= 105
0 <= routes[i][j] < 106
0 <= source, target < 106

*/

// Solution 1
const numBusesToDestination = (routes, source, target) => {
    if (target === source) return 0;

    let que = [];
    let visitedBuses = new Set();
    let stopsHash = [];

    for (let i = 0; i < routes.length; i++) {
        const currRoute = routes[i];
        for (const currStop of currRoute) {
            if (stopsHash[currStop] === undefined) {
                stopsHash[currStop] = [i];
            } else {
                stopsHash[currStop].push(i);
            }
            if (currStop === target) {
                que.push(...currRoute);
                visitedBuses.add(i);
            }
        }
    };

    let length = 1;
    while (que.length > 0) {
        let tempQue = [];
        while (que.length > 0) {
            const curr = que.shift();
            if (curr === source) return length;
            tempQue.push(curr);
        }

        for (const stop of tempQue) {
            if (stopsHash[stop]?.length > 0) {
                for (const bus of stopsHash[stop]) {
                    if (!visitedBuses.has(bus)) {
                        que.push(...routes[bus]);
                        visitedBuses.add(bus);
                    }
                }
            }
        }
        length++;
    }
    return -1;
};

console.log(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)); // -1