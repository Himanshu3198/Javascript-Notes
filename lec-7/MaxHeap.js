var maxKelements = function(nums, k) {
    const maxHeap= new MaxPriorityQueue();
    for(const i of nums) maxHeap.enqueue(i);
    var result=0;
    while(maxHeap.size()>0 && k>0){
        let curr=maxHeap.dequeue().element;
        result+=curr;
        maxHeap.enqueue(Math.ceil(curr/3));
        k--;
    }
    return result;
};
