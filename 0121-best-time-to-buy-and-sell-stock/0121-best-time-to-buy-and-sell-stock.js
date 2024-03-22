/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Brute force approach
    // let max = Number.MIN_VALUE;
    // for(let i=0;i<prices.length ; i++){
    //  for(let j=i;j<prices.length ; j++){
    //      max = Math.max(max,prices[j]-prices[i])
    //  }
    // }
    // return max;
    
    let max = Number.MIN_VALUE;
    let suffix = Array(prices.length).fill(0);
    
    for(let i=prices.length-1;i>=0;i--){
        if(i === prices.length-1){
            suffix[i] = prices[i]
        }else{
            suffix[i] = Math.max(prices[i],suffix[i+1])
        }
    }
    
    for(let i=0; i<prices.length; i++){
        max = Math.max(max,suffix[i]-prices[i])
    }
    
    return max;
    
};