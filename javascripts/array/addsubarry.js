function longestUniqueSubarray(arr) {
  let seen = new Set()
  let left =0
  let maxCount =0
  let maxSubarray = []
  for(let right=0;right<arr.length;right++){
      
    while(seen.has(arr[right])){
        seen.delete(arr[left])
        left++

    }
    seen.add(arr[right])

    console.log(seen)

    if(right - left + 1 > maxCount){
        maxCount++
        maxSubarray = arr.slice(left, right + 1)
    }

  }
    console.log(maxCount)
    console.log(maxSubarray)

}

// Example usage:
const arr = [1, 2, 1, 3, 4, 2, 3];

console.log(longestUniqueSubarray(arr))

