/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n= nums.length;
    let low = 0;
    let high = n-1;
    let mid = 0;
    
    function swap(i,j){
        let temp = nums[i];
        nums[i]= nums[j];
        nums[j]=temp;
    }
    
    while(mid<=high){
        if(nums[mid]===0){
            swap(mid,low);
            mid++;
            low++;
        }else if(nums[mid] === 2){
            swap(mid,high);
            high--;
        }else{
            mid++;
        }
    }
};