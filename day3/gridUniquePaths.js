//leetcode-link:https://leetcode.com/problems/unique-paths/




//Time:O(mn);
//Using dynamic programming
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function path(i,j,m,n,dp){
    if(i>=m || j>=n)return(0);
    if(i==m-1&&j==n-1)return(1);
   if(dp[i][j]!=-1)return(dp[i][j]);
 
    let c1=path(i,j+1,m,n,dp);
    let c2=path(i+1,j,m,n,dp);
    return(dp[i][j]=c1+c2);
    
}
var uniquePaths = function(m, n) {
    var dp=[];
    for(let i=0;i<m;i++){
        let temp=new Array(n).fill(-1);
        dp.push(temp);
    }
   
    return(path(0,0,m,n,dp));
};

-----------------------------------------------------------------------------------------------------------------
 // time:O(m) or O(n)

//Using combinatrics
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    var n=m+n-2;
    var r=m-1;
    var ans=1;
    for(let i=1;i<=r;i++){
        ans=ans*(n-i+1)/(i);
        console.log(ans);
    }
    return(ans);
};
