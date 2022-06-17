//time:O(n)
//SPace:O(n)
//leetcode:https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var mp=new Map();
    for(let num of nums){
       
            mp.set(num,1);
        
    }
    var cnt=0;
    var ans=0;
    for(let num of nums){
        if(typeof mp.get(num-1)==="undefined"){
           cnt=0;
            let cur=num;
            while(typeof mp.get(cur)!=="undefined"){
                    cnt++;
                cur++;
            }
            ans=Math.max(ans,cnt);
        }
    }
    return(ans);
};
