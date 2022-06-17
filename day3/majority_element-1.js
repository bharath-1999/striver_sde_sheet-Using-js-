//Voting algorithm
//time:O(n)
//space:O(1)
//leetcode link:https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var candidate;
    var count=0;
    for(let i=0;i<nums.length;i++){
        if(count==0){
            candidate=nums[i];
        }
        if(nums[i]===candidate)
            count++;
        else
            count--;
    }
    return(candidate);
};
