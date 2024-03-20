/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
    if(typeof obj ==='object'){
        if(Array.isArray(obj)){
            let arr = [];
            for(let item of obj){
                if(typeof item ==='object'&& item!==null){
                    arr.push(compactObject(item))
                }else if(Boolean(item) === true){
                    arr.push(item)
                }
            }
            return arr;  
        }else{
            let cObj = {};
            for(let key in obj){
                if(typeof obj[key] ==='object' && obj[key]!==null){
                    cObj[key]=compactObject(obj[key])
                }else if(Boolean(obj[key])=== true){
                    cObj[key] = obj[key]
                }
            }
            return cObj;
        }
    }
    return obj;
};