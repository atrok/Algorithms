/**
 * @param {string}
 * @return {boolean}
 */


var openingBrackets=['(','{','['];
var closingBrackets=[')','}',']'];


var isValid = function(s) {
    
    var l=s.length;
    var ind=0;
    var ind_clos=1;
    var temp_arr=[];
    

    let result=false;
    
    var str="";
    
    if (!isEven(l)) return false;
    if (l==0) return false;
    
    while(l>0){
        
        let ch_o=s.charAt(ind);
        let ch_c=s.charAt(ind+1);
        
        if(isOpenBracket(ch_o)){
            if(isClosingBracket(ch_c)){
                if(isPair(ch_o,ch_c)){// no need to save, moving to the next
                    console.log("Found pair "+ch_o+ch_c+" at "+ind+","+(ind+1));
                    
                    ind=ind+2;
                    l=l-2;

                    result=true;
                    
                }else{
                    return false; // adjacent opening and closing bracket do not match
                }
            }else{ // two open brackets. Save opening bracket, and move to the next

                if(l==2)// edge case if there are only 2 elements and both are opening brackets
                    return false;

                str=str+ch_o;
                ind++;
                l--;

            }
        }else{// closing bracket
            if(ind!=0){ 
                
                str=str+ch_o;
                ind++;
                l--;


            }else{//first bracket appears to be closing, returning false
                return false

            }

        }
        

    
    }
    
    if (str.length>0)
            result=isValid(str);
    
    return result;
    
};

function isEven(n) {
   return n % 2 == 0;
}


function isOpenBracket(ch){
    return (openingBrackets.indexOf(ch)!=-1)? true: false;
}

function isClosingBracket(ch){
    return (closingBrackets.indexOf(ch)!=-1)? true: false;
}

function isPair(open,close){
    return (openingBrackets.indexOf(open)==closingBrackets.indexOf(close))? true: false;
}

module.exports={isValid: isValid};