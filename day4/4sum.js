//O(n^3)
//leetcodeLink:https://leetcode.com/problems/4sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    nums.sort();
    console.log(nums);
    ans=[];
    for(var i=0;i<nums.length;i++){
        if(i!=0&&nums[i]==nums[i-1])continue;
        for(var j=i+1;j<nums.length;j++){
            if(j!=i+1&&nums[j]==nums[j-1])continue;
            let find=nums[i]+nums[j];
            find=target-find;
            var low=j+1,high=nums.length-1;
            while(low<high){
                if(nums[low]+nums[high]==find){
                    ans.push([nums[i],nums[j],nums[low],nums[high]]);
                   var left=nums[low],right=nums[high];
                    while(low<=high&&nums[low]==left)low++;
                    while(low<=high&&nums[high]==right)high--;
                }
                else if(nums[low]+nums[high]<find)
                    low++;
                else
                    high--;
            }
        }
    }
    return(ans);
    
};
