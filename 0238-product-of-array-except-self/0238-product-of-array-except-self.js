/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     let n = nums.length;
//     let prefixArr = Array(n).fill(0);
//     let suffixArr = Array(n).fill(0);
    
//     prefixArr[0] = nums[0];
//     suffixArr[n-1] = nums[n-1];
    
//     for(let i = 1;i<n;i++){
//         prefixArr[i] = nums[i]*prefixArr[i-1];
//     }
    
//     for(let i = n-2;i>=0;i--){
//         suffixArr[i] = nums[i]*suffixArr[i+1];
//     }
    
//     let result = Array(n).fill(0);
    
//     for(let i = 0;i<n;i++){
//         if(i===0){
//             result[0] = suffixArr[i+1];
//         }
//         else if(i===n-1){
//             result[n-1] = prefixArr[i-1];
//         }else{
//             result[i] = suffixArr[i+1]*prefixArr[i-1];
//         }
//     }
//     return result;
    
    
    let n = nums.length;
    let suffixArr = Array(n).fill(0);
    
    suffixArr[n-1] = nums[n-1];
    
    
    for(let i = n-2;i>=0;i--){
        suffixArr[i] = nums[i]*suffixArr[i+1];
    }
    let result = Array(n).fill(0);
    
    let productTillNow = 1;
    
    for(let i = 0;i<n;i++){
        if(i===0){
            result[0] = suffixArr[i+1];
        }
        else if(i===n-1){
            result[n-1] = productTillNow;
        }else{
            result[i] = productTillNow*suffixArr[i+1];
        }
        productTillNow = productTillNow*nums[i];
    }
    return result;   
};













