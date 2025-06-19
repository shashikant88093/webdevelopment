let arr = [1,2,3,4,5,6,7,8]
Array.prototype.myFilter = function(cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

arr.myFilter((dt,idx)=>{
    if(dt > 3){
        console.log(dt,"dt")
    }
})

