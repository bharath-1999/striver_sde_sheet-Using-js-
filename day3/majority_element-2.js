
//Moores voting algorithm
//time:O(1)
//LeetcodeLink:https://leetcode.com/problems/majority-element-ii/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var cnt1=0,cnt2=0;
    var cand1=-1,cand2=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===cand1)cnt1++;
        else if(nums[i]===cand2)cnt2++;
        
        else if(cnt1==0){
            cand1=nums[i];
            cnt1=1;
        }
        else if(cnt2==0){
            cand2=nums[i];
            cnt2=1;
        }
        
        else{
            cnt1--;
            cnt2--;
        }
    }
   ans=[];
    console.log(cand1,cand2);
    cnt1=0,cnt2=0;
    for(let no of nums){
        if(no===cand1)cnt1++;
        else if(no===cand2)cnt2++;
    }
    if(cnt1>Math.floor(nums.length/3))
        ans.push(cand1);
    if(cnt2>Math.floor(nums.length/3))
        ans.push(cand2);
    return(ans);
        
};
