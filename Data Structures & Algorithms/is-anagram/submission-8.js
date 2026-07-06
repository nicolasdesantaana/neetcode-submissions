class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSorted = s.split("").sort()
        const tSorted = t.split("").sort()
         if(sSorted.join() === tSorted.join()) return true; else return false;
    }
}
