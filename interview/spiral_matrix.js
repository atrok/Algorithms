/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */

var directions={forw:1,back:-1,still:0};

var spiralOrder = function(matrix) {
    
    if(matrix.length==0) //edge case
    return [];

    // determine the size 
    var y_size=matrix.length;
    var x_size=matrix[0].length;
    var bound_x=x_size-1;
    var bound_y=y_size-1;
    var begin_x=0,begin_y=0;
    
    var direction_x=directions.forw;
    var direction_y=directions.still;
    var result=new Array(y_size*x_size);
    
    console.log(result.length);
    
    var x=0,y=0;
    
    for(var t=0; t<result.length;t++){
        
        
        if(x==bound_x && y==begin_y){ //reached end of row,moving down
            console.log("//reached end of row,moving down");
            direction_x=directions.still;
            direction_y=directions.forw;
            (begin_y>0)?begin_x++:begin_x;
            (begin_y>0)?bound_y--:bound_y;
            
        }

        if(x==bound_x && y==bound_y){//reached end of column, moving left
            console.log("//reached end of column, moving left")
            direction_x=directions.back;
            direction_y=directions.still;
        }

        if(x==begin_x && y==bound_y && bound_y>begin_y){//reached beginning of the row at last column, moving up
            console.log("/reached beginning of the row at last column, moving up")
            direction_x=directions.still;
            direction_y=directions.back;
            begin_y++;
            
        }

        if(x==begin_x && y==begin_y && bound_x>begin_x ){// beginning of lane, moving right
            console.log("// beginning of lane, moving right")
            direction_x=directions.forw;
            direction_y=directions.still;
            (begin_y>0)?bound_x--:bound_x;
        }

        console.log("matrix["+y+"]["+x+"] :"+matrix[y][x]+", begin_x:"+begin_x+", bound_x:"+bound_x+", begin_y:"+begin_y+", bound_y:"+bound_y)

        result[t]=matrix[y][x];
        x=x+direction_x;
        y=y+direction_y;

        }
        
        console.log(result.toString());
        return result;
    
    
    
};


module.exports={spiralOrder};