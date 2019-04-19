/**
 * 
 * Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.
 * 
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    //edge cases
    if(n==0)
        return [];
    if(n==1)
        return [[1]];
    
    //populate result matrix
    var result=new Array(n);
    
    var t=n*n;
    
    for (var o=0;o<result.length;o++){
        result[o]=[n];
    }

    
    // variables
    var x=0,y=0,begin_x=0,begin_y=0, bound_x=n-1, bound_y=n-1;
    var directions={
        forw:1, back:-1, still:0
    }
    var direction_x,direction_y;
    
    
    for (var i=1;i<=t;i++){// iterate over all elements
        
        if(x==begin_x && y==begin_y && begin_x<bound_x){// beginning of the row, moving right
            //console.log("// beginning of the row, moving right")
            direction_x=directions.forw;
            direction_y=directions.still;
            (begin_y>0)?bound_x--: bound_x; 
        }
        
        if(x==bound_x&&y==begin_y){// end of row, moving down
            //console.log("// end of row, moving down")
            direction_x=directions.still;
            direction_y=directions.forw;
            (begin_y>0)?bound_y--:bound_y;
            (begin_y>0)?begin_x++:begin_x;
            
           }
        
        if(x==bound_x&&y==bound_y){// end of column, moving left
            
            //console.log("// end of column, moving left")
            direction_x=directions.back;
            direction_y=directions.still;
        }
        
        if(x==begin_x&&y==bound_y){// end of column, beginning of row, moving up
            
            //console.log("// end of column, beginning of row, moving up")
            direction_x=directions.still;
            direction_y=directions.back;
            begin_y++;
        }
        
        

        result[y][x]=i;
        
        
        //console.log("result["+y+"]["+x+"] :"+result[y][x]+", begin_x:"+begin_x+", bound_x:"+bound_x+", begin_y:"+begin_y+", bound_y:"+bound_y)
        
        x=x+direction_x;
        y=y+direction_y
        
    }
    
    console.log(result.toString());
    
    return(result);
    
};

module.exports={generateMatrix};