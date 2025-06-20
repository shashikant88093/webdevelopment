
let arr = [2, 8, 5, 3, 4, 8, 6]

// Simple bubble sort to sort the entire array
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i  - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
console.log(arr)
