//time:O(nlogn)
//LeetcodeLink:https://leetcode.com/problems/reverse-pairs/


/**
 * @param {number[]} nums
 * @return {number}
 */
 function merge(i,mid,j,arr){
        var left=[],right=[];
        for(let k=i;k<=mid;k++)
        left.push(arr[k]);
        for(let k=mid+1;k<=j;k++)
        right.push(arr[k]);
        var index=i;
        var l=0,r=0;
        var invcount=0;
     var rar=mid+1;
        for(let lar=i;lar<=mid;lar++){
            while(rar<=j&&arr[lar]>2*arr[rar]){
                rar++;
            }
            invcount+=rar-(mid+1);
              //   console.log(invcount);

        }
        while(l<left.length&&r<right.length){
            if(left[l]<=right[r]){
                arr[index++]=left[l++];
                
            }
            else{
                arr[index]=right[r];
                index++;
                r++;
                
            }
        }
        while(l<left.length){
             arr[index++]=left[l++];
        }
        while(r<right.length){
              arr[index++]=right[r++];
        }
        return(invcount);
    }
  function mergefun(i,j,arr){
        if(i<j){
            let mid=Math.floor((i+j)/2);
            let left=mergefun(i,mid,arr);
            let right=mergefun(mid+1,j,arr);
            let combined=merge(i,mid,j,arr);
         //  console.log(left,right,combined);

            return(left+right+combined);
        }
        return(0);
  }
var reversePairs = function(nums) {
    return(mergefun(0,nums.length-1,nums));
};
