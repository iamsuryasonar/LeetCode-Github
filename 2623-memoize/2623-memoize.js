/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    let map = new Map();
    return function(...args) {
        if(!map.has(JSON.stringify(args))){
            let res =fn(...args)
            map.set(JSON.stringify(args),res)
            return res
        }else{
            return map.get(JSON.stringify(args))
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */