//space:o(1),Time-complexity:O(n)
//Leetcode-link:https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rev(nums,i,j){
    while(i<j){
        let temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
        i++;
        j--;
    }
}
var nextPermutation = function(nums) {
    
    var breakpoint;
    //step1
    for(var i=nums.length-1;i>=1;i--){
        if(nums[i-1]<nums[i])
            break;
        
    }
    
    if(i==0){
        rev(nums,0,nums.length-1);
        return;
    }
    breakpoint=i-1;
    
    //step-2
    var indexToReplace;
    for(var i=nums.length-1;i>breakpoint;i--){
        if(nums[i]>nums[breakpoint]){
            let temp=nums[i];
            nums[i]=nums[breakpoint];
            nums[breakpoint]=temp;
            break;
        }
    }
    //step3;
    rev(nums,breakpoint+1,nums.length-1);
};
