//Space:o(1),time:O(n)
//Leetcode link:https://leetcode.com/problems/sort-colors/



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(nums,a,b){
    let temp=nums[a];
    nums[a]=nums[b];
    nums[b]=temp;
}
//zeroB:elements less than this index are all 0
//oneB:elements greater than this index are all 2's
//walker is going to traverse the array,pick element and throw them inside the corresponding boundaies.
var sortColors = function(nums) {
    
    var zeroB=0;
    var twoB=nums.length-1;
    var walker=0
    while(walker<=twoB){
        if(nums[walker]==0){
            swap(nums,walker,zeroB);
            walker++;
            zeroB++;
        }
        else if(nums[walker]==1){
            walker++;
        }
        else if(nums[walker]==2){
            swap(nums,walker,twoB);
            twoB--;
        }
    }
};
