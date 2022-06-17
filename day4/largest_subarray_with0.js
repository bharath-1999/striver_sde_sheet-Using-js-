//space:O(n)
//time:O(n)
//Gfg link:https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

class Solution {
    maxLen(arr,n){
        //code here
        var prefix=new Array(arr.length);
        var ans=0;
       
        var mp=new Map();
        mp.set(0,-1);
        var sum=0;
        for(let i=0;i<n;i++){
            sum=sum+arr[i];
            if(typeof mp.get(sum)==="undefined"){
                mp.set(sum,i);
            }
            else{
                let s=mp.get(sum);
                ans=Math.max(ans,i-s);
            }
        }
        return(ans);
    }
}
