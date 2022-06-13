//time:O(n^2),space:o(n2)
//Leetcode link:https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    ans=[];
    for(let i=0;i<numRows;i++){
        let current=new Array(i+1);
        current[0]=1;
        current[i]=1;
        
        for(let j=1;j<i;j++){
            current[j]=ans[i-1][j-1]+ans[i-1][j];
        }
        ans.push(current);
    }
    
    return(ans);
};
