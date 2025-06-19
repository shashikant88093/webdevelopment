
function countArr(arr) {

    let freq = {}
    let maxCount = 0
    let maxSubarray = null

    for (let i = 0; i<arr.length; i++) {
        const item = arr[i]

        freq[item] = (freq[item] || 0) + 1
        if(freq[item] > maxCount){
            maxCount= freq[item]
            maxSubarray = item
        }
    }
    return {
        freq,
        maxCount,
        maxSubarray
    }
}

let arr = [1, 2, 3, 2, 1, 5, 6, 7, 8, 9, 1,2]
console.log(countArr(arr))