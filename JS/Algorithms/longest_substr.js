/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    if (s.length==0) return 0
    
    var r = s.split("");
    var result = [];
    var ind = 0;
    var el_index=0;// element of string to be checked
    
    if (result.length === 0) {
            result.push(new Map());
        }
    
    while(el_index<r.length){
        
        var el=r[el_index];



        if (result[ind].get(el) !==undefined) {//met repeating character, need to move to next ind in result array
            
            el_index=result[ind].get(el);/// assign index of repeating character to be able to start off from this position
            
            ind++;
            result[ind] = new Map();
        }else{
        result[ind].set(el,el_index); /// adding character to keep track

        }
        el_index++;
        
    }
    
    
    result.sort((a, b) => {
        if (a.size < b.size) return 1;
        if (a.size > b.size) return -1;
        if (a.size = b.size) return 0;
    })

    return result[0].size;

};

module.exports = { lengthOfLongestSubstring };