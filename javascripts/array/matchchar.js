function isValid(strs){
    let sets = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    let stack = []

    for (char of strs){
        // console.log(char, "str")
        // console.log(sets[char],"sets")
        if(sets[char]){
            stack.push(char)
        }else{
            let lastIndex = stack.pop()
            // console.log(lastIndex,"lastIndex")
            if(sets[lastIndex] !== char) return false
        }
    }
// console.log(stack)
return true
}
let str = "{[]})"
// let str = "{[]}"

console.log(isValid(str))