// A memoization program to find minimum number 
// operations to convert str1 to str2 
#include <bits/stdc++.h> 
using namespace std; 
  
// Maximum 2-D array coloumn size 
const int maximum = 1000; 
  
// Utility function to find minimum of three numbers 
int min(int x, int y, int z) 
{ 
    return min(min(x, y), z); 
} 
  
int editDist(string str1, string str2, int m, int n, int dp[][maximum]) 
{ 
    // If first string is empty, the only option is to 
    // insert all characters of second string into first 
    if (m == 0) 
        return n; 
  
    // If second string is empty, the only option is to 
    // remove all characters of first string 
    if (n == 0) 
        return m; 
  
    // if the recursive call has been 
    // called previously, then return 
    // the stored value that was calculated 
    // previously 
    if (dp[m - 1][n - 1] != -1) 
        return dp[m - 1][n - 1]; 
  
    // If last characters of two strings are same, nothing 
    // much to do. Ignore last characters and get count for 
    // remaining strings. 
  
    // Store the returned value at dp[m-1][n-1] 
    // considering 1-based indexing 
    if (str1[m - 1] == str2[n - 1]) 
        return dp[m - 1][n - 1] = editDist(str1, str2, m - 1, n - 1, dp); 
  
    // If last characters are not same, consider all three 
    // operations on last character of first string, recursively 
    // compute minimum cost for all three operations and take 
    // minimum of three values. 
  
    // Store the returned value at dp[m-1][n-1] 
    // considering 1-based indexing 
    return dp[m - 1][n - 1] = 1 + min(editDist(str1, str2, m, n - 1, dp), // Insert 
                                      editDist(str1, str2, m - 1, n, dp), // Remove 
                                      editDist(str1, str2, m - 1, n - 1, dp) // Replace 
                                      ); 
} 
  
// Driver Code 
int main() 
{ 
  
    string str1 = "sunday"; 
    string str2 = "saturday"; 
    int m = str1.length(); 
    int n = str2.length(); 
  
    // Declare a dp array which stores 
    // the answer to recursive calls 
    int dp[m][maximum]; 
  
    // initially all index with -1 
    memset(dp, -1, sizeof dp); 
  
    // Function call 
    // memoization nad top-down approach 
    cout << editDist(str1, str2, m, n, dp); 
  
    return 0; 
} 