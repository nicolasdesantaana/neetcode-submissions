class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log(s.split('').join('').replace(/[^a-zA-Z0-9]/g, ""))
        console.log(s.split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, ""))
        if(s.split('').join('').replace(/[^a-zA-Z0-9]/g, "").toLowerCase() == s.split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, "").toLowerCase()) return true;
        return false;
    }
}
