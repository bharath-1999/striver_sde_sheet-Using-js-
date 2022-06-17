//time: O(logm +logn)

//leetcode Link:https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var c=matrix[0].length;
    var r=matrix.length;
    var low=0,high=r-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(target<=matrix[mid][c-1]){
            high=mid-1;
        }
        else
            low=mid+1;
    }
    if(high+1>r-1)return(false);
    var searchRow=high+1;
    low=0,high=c-1;
    while(low<=high){
          let mid=Math.floor((low+high)/2);
        if(target==matrix[searchRow][mid])
            return(true);
        else if(target<matrix[searchRow][mid])
            high=mid-1;
        else
            low=mid+1;
    }
    return(false);
};
