/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0; // keep track of the string
    let i = 0; // to traverse through the array
    
    while(i<chars.length){
        let j = i; // to keep track of duplicate characters
        
        chars[index] = chars[i]; // in every iteration replace the string in chars
        index++; // increment index to make place to place count of string duplicates
        
        while(chars[i] === chars[j]) j++; // increment if character is repeating
        
        if(j-i>1){ // j-i gives the count of particular character
            // case: if count is greater than 1, convert it to string and place each character of string to the chars array
            let s = String(j-i) 
            for(let k = 0; k<s.length;k++){ 
                chars[index] = s[k];
                index++;
            }
        }
        
        i = j // move i pointer to the next non duplicate character
    }
    return index; // index is the length of the each string of compressed string in array
  };