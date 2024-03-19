/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    
    if(functions.length === 0){
        return Promise.resolve(functions);
    }
    
    return new Promise((resolve,reject)=>{
        let results = [];
        let resolvedCount = 0;

        functions.forEach((promise,i)=>{
            promise().then((data)=>{
                results[i] = data;
                resolvedCount++;
                if(resolvedCount===functions.length) resolve(results); 
            }).catch((e)=>{
                reject(e)
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */