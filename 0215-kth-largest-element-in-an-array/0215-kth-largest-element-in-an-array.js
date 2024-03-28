/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function partition(arr,low,high){
    let pivot = arr[low]
    let i = low+1;
    let j = high;
    
    while(i<=j){
        while(arr[i]<pivot) i++;
        while(arr[j]>pivot) j--;
        
        if(i<=j){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    
    let temp = arr[low];
    arr[low]= arr[j];
    arr[j] = temp;
    return j;
}

var findKthLargest = function (nums, k) {
    
    let n = nums.length;
    let mid;
    function quickSelect(arr, low, high) {
        if (low <= high) {
            mid = partition(arr, low, high)
            if (mid + 1 === (n - k + 1)) {
                return arr[mid];
            } else if (mid + 1 < (n - k + 1)) {
                return quickSelect(arr, mid+1, high)
            } else if (mid + 1 > (n - k + 1)) {
                return quickSelect(arr, low, mid-1)
            }
        }
    }

    quickSelect(nums, 0, nums.length - 1)
    return nums[mid]
};

// var findKthLargest = function (nums, k) {
//     let n = nums.length;
//     let mid;

//     function quickSelect(arr, low, high) {
//         if (low <= high) { // Change here: <= instead of <
//             mid = partition(arr, low, high);
//             if (mid + 1 === (n - k + 1)) {
//                 return arr[mid];
//             } else if (mid + 1 < (n - k + 1)) {
//                 return quickSelect(arr, mid + 1, high);
//             } else {
//                 return quickSelect(arr, low, mid - 1);
//             }
//         }
//     }

//     return quickSelect(nums, 0, nums.length - 1);
// };