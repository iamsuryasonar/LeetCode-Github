/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let index = 0; index < nums.length; index++) {
        if (map.has(target-nums[index])) {
            return [map.get(target-nums[index]), index];
        }
        map.set(nums[index], index);
    }
    return [];
    
};