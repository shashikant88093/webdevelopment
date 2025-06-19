
let arr = [1,2,3,4,5,6,7,8,9]
 
Array.prototype.myReduce = function(cb, initialValue) {
    // let arr = this;
    let acc, startIdx;

    if (initialValue !== undefined) {
        acc = initialValue;
        startIdx = 0;
    } else {
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        acc = this[0];
        startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}

let ans = arr.myReduce((acc,cuurectValue)=> acc + cuurectValue ,3)

console.log(ans)