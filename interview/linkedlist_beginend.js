
/*

convert linked list
1->2->3->4->5->null
into
1->5->2->4->3->null

*/


function LinkedList(args){
    this.val=(args)?args:null;
    this.next=null;
}

function convert(node){

    var arr=[];

    while(node!=null){

        arr.push(node.val);
        node=node.next;
    }

    var start=0; end=arr.length-1;

    var node=new LinkedList();

var arr2=[];
    while(start<=end){
        console.log("s:"+start+" e:"+end);
        if(start==end){
            arr2.push(arr[start]);
        }else{
        arr2.push(arr[start]);
        arr2.push(arr[end]);
        }
        start++;
        end--;
    }

    return populateLinkedList(arr2);
}


function populateLinkedList(arr){

    var node=new LinkedList(arr[arr.length-1]); //starting from last element
    for(var i=arr.length-2; i>=0; i--){

        let t=new LinkedList(arr[i]);
        t.next=node;
        node=t;
    }

    return node;

}

var node=populateLinkedList([1,2,3,4,5,6])
console.log(node);

var arr=convert(node);

console.log(arr);

module.exports={LinkedList, populateLinkedList,convert};