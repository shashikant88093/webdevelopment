let arr = [1,2,3,4,5,6]

Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

arr.myForEach((data,i)=>{
    console.log(data,i)
})