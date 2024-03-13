/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 let sArr = s.split('');
    let tArr = t.split('');
    let sortedS = sArr.sort();
    let sortedT = tArr.sort();
    if (sortedS.join('') === sortedT.join('')) {
        return true
    }
    return false;
};