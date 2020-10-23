/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
     
    this.arr=[];
    
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    
    if(key>=0 &&key<=1000000 && value>=0&&value<=1000000&&this.arr.length<10001){
        
        this.arr[key]=value;
        
        console.log ("added: key "+key+" value "+value)
        
        
    }else{
        return 0;
    }
    
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    
    
    var r=(this.arr[key]!==undefined)? this.arr[key] : -1;
    
    console.log(" get: key "+key+" value "+r);
    
    return r;
    
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    
    console.log("remove: key "+key+" value "+(this.arr[key])?this.arr[key]: "Not exist");
    this.arr.splice(key,1);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

 module.exports=MyHashMap;