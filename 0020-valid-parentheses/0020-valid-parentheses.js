/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
//     if(s.length===1){
//         return false;
//     }
    
    for(i in s){
        if(s[i]==='('|| s[i]==='{'|| s[i]==='['){
            stack.push(s[i])
        }else if(s[i]===')'){
            if(stack[stack.length-1]==='('){
                stack.pop()
            }else return false
        }else if(s[i]==='}'){
            if(stack[stack.length-1]==='{'){
                stack.pop()
            }else return false
        }else if(s[i]===']'){
                if(stack[stack.length-1]==='['){
                stack.pop()
            }else return false
        }
    }
    
    return stack.length===0
};