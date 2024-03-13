/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let index = 0; index < nums.length; index++) {
        if (map.has(nums[index])) {
            return [map.get(nums[index]), index]
        }
        map.set(target - nums[index], index);
    }
    return [];
};