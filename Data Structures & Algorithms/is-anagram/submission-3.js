class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var list1 =createMap(s).sort((a,b) => a.letter.localeCompare(b.letter))
        var list2 =createMap(t).sort((a,b) => a.letter.localeCompare(b.letter))
        if(JSON.stringify(list1) == JSON.stringify(list2)) return true;
        else return false;
        
    }
}

  function createMap(s){
        var resultList = [];
        for(let i = 0;i < s.length;i++){
            var find = resultList.find(x => x.letter == s[i])
            if(find == undefined){
                resultList.push({letter: s[i],freq:1});
            }else{
                find.freq++;
            }
        }
        return resultList;
    }
