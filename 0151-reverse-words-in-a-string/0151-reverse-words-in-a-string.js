/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sentenceArr = s.split(' ');
    let result = '';
    for (let item of sentenceArr) {
        result = item.trim() + ' ' + result.trim();
    }
    return result.trim()
};