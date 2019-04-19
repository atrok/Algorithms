/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    if (height.length<2)
        return 0;
    
    let area=0;
    
    for (var i=0;i<height.length-1; i++){
        
        for (var j=i+1;j<height.length;j++){
            
            var side1=Math.min(height[i],height[j]);
            var side2=j-i;
            
            area=Math.max(area, side1*side2);
            
        }
    }
    return area;
    
};