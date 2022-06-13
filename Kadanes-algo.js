//space:O(1),time: O(n)
//leetcode_link:https://leetcode.com/problems/maximum-subarray/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   
    var ans=nums[0];
    var sumSofar=Math.max(ans,0);

    for(let i=1;i<nums.length;i++){
        
        sumSofar+=nums[i];
        
        ans=Math.max(sumSofar,ans);
        if(sumSofar<0)
            sumSofar=0;
    }
    return(ans);
    
};
