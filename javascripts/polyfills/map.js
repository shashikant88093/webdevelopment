let arr = [1,2,3,4,5,6,7,8,9]

Array.prototype.myMap = function(cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
}

arr.myMap((dt)=>{

    console.log( dt * 2)
})

