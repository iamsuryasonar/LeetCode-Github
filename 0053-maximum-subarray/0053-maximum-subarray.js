/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = 0;
    let j = 0;
    
    while(j<nums.length){
        sum = sum+nums[j];
        if(sum>maxSum){
            maxSum= sum;
        }
        if(sum<0){
            sum= 0;
        }
        j++;
    }
    return maxSum;
};