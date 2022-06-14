//Leetcode-link:https://leetcode.com/problems/merge-intervals/
//space:o(n),time:o(nlogn)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
  //sorting the array,by sending a custom comparator
    intervals.sort((a,b)=>{
        if(a[0]>b[0])
            return(1);
        else if(a[0]<b[0])
            return(-1);
        else if(a[1]>b[1])
            return(1);
        else
            return(-1);
    });
   
    ans=[];
    var start=intervals[0][0];
    var end=intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>end){
            ans.push([start,end]);
            start=intervals[i][0];
            end=intervals[i][1];
        }
        else{
            end=Math.max(end,intervals[i][1]);
        }
    }
    ans.push([start,end]);
    return(ans);
};
