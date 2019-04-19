var p = require("./parenthesis");
var spiral = require("./spiral_matrix");
var spiral2=require("./spiral_matrix2");
var jump=require("./jump");
var moveZeroes=require("./zeroarr");
var intersect=require("./intersect");

var intersecttest={
    fn:intersect.intersect,
    test:[
        {condition:[[93,57,18,68,93,31,36,11,27,82,3,91,58,36,21,26,72,53,15,9,56,68,89,37,54,40,87,61,82,24,8,68,80,36,31,11,51,45,66,78,70,93,44,45,19,23],
            [24,30,85,26,19,82,20,92,34,31,15,43,83,40,15,0,87,60,11,2,0,26,49,14,19,18,55,21,96,68,30,50,11,59,8,89,51,59,76,16,59,28,88,3,87,94,0,36,70,80,8,65,84,88,28,91,96]],
        result:[18,68,31,36,11,82,3,91,21,26,15,89,40,87,24,8,80,11,51,70,19]
        }
    ]
}
var moveZeroestest = {
    fn: moveZeroes.moveZeroes, test: [
        { condition: [0,1,0,3,12], result: [1,3,12,0,0] }
    ]
};


var test = {
    fn: p.isValid, test: [
        { condition: "()", result: true }
    ]
};

var spiral = {
    fn: spiral.spiralOrder,
    test: [
        
        {
            condition: [
                [1, 2],
                [5, 4],
                [9, 8]
            ], result: [1, 2, 4, 8, 9, 5]
        },
        {
            condition: [
                [1],
                [5],
                [9]
            ], result: [1, 5, 9]
        },
        { condition: [], result: [] },
        {
            condition:
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ],
            result: [1, 2, 3, 6, 9, 8, 7, 4, 5]
        }, 
        
        {
            condition: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
            ],
            result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
        }
        ,
        {
            condition:
            [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],
            result: [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
        },
        
        {
            condition: 
            [[2,3,4],[5,6,7],[8,9,10],[11,12,13]],
            result:
            [2,3,4,7,10,13,12,11,8,5,6,9]
        }

    ]
};

var spiral2={
    fn:spiral2.generateMatrix,
    test:[
        {
            condition: 0,
            result: []
        },
        {
            condition: 1,
            result: [[]]
        },
        {
            condition: 2,
            result:[[1,2][4,3]]
        },
        {
            condition: 3,
            result:[[1,2,3],[8,9,4],[7,6,5]]
        },
        {
            condition: 4,
            result: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
        }

    ]
}

var jumptest={
    fn:jump.jump,
    test:[{
        condition:[3,2,1],
        result:1
    }]
}
function assert(arg) {

    arg.test.forEach(element => {

        var res = arg.fn(element.condition);

        if (res.toString() != element.result.toString()) {
            console.log("Fail, got:" + res.toString() + ", expected:" + element.result.toString());
        } else {
            console.log("Success, got:" + res.toString());
        }

    });

}


assert(intersecttest);
