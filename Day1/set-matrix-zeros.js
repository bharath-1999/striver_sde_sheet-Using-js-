//Time:O(mn)   space:O(m+n)
//Leetcode-link:https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    
    var row=new Array(matrix[0].length);
    var col=new Array(matrix[0].length);
    for(let i=0;i<matrix[0].length;i++)row[i]=0;
    for(let j=0;j<matrix.length;j++)col[j]=0;
        
    //marking row and col array if the cell is 0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0)
                {
                   row[i]=1;
                    col[j]=1;
                }
        }
    }
  //if rowno or columno of a cell is marked 1,then put matrix[i][j]=0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(row[i]==1|| col[j]==1)
                matrix[i][j]=0;
        }
    }
    
   return(matrix);
};

------------------------------------------------------------------------------------------------------------------------------------------------------------
//Time:o(mn) space=o(1)
var setZeroes = function(matrix) {
    
        
    var iscol=0,isrow=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0)
                {
                   matrix[i][0]=0;
                    matrix[0][j]=0;
                    if(i==0)
                        isrow=1;
                    if(j==0)
                        iscol=1;
                }
        }
    }
 
    for(let i=matrix.length-1;i>=0;i--){
        for(let j=matrix[i].length-1;j>=0;j--){
            if(i==0){
                if(isrow==1)matrix[i][j]=0;
            }
            else if(j==0){
                if(iscol==1)matrix[i][j]=0;
            }
            else if(matrix[i][0]==0|| matrix[0][j]==0)
                matrix[i][j]=0;
        }
    }
    
   return(matrix);
};
