var MyHashMap=require('./MyHashMap');

var hash=new MyHashMap();

hash.put(1,2);
hash.put(11,0);
hash.put(11);
console.log(hash.get(11));
console.log(hash.get(8));

