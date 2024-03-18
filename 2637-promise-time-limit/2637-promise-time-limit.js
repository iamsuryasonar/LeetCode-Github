/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve,reject)=>{
            let timeoutId= setTimeout(()=>{
               clearTimeout(timeoutId);
               reject('Time Limit Exceeded')
            },t)
            
            fn(...args).then((value)=>{
                resolve(value);
            })
            .catch((error) => {
                
                reject(error);
            }).finally(()=>{
                clearTimeout(timeoutId);
            })
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */