# What is hoisting in JavaScript?
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
- Hoisting applies to both variable declarations (using `var`, `let`, or `const`) and function declarations, but not to function expressions or arrow functions.
- Variables declared with `var` are hoisted, but their initialization is not. This means that you can reference a `var` variable before its declaration, but it will be `undefined` until the line where it is initialized.
- Variables declared with `let` and `const` are also hoisted, but they are not initialized until their declaration is reached in the code. Accessing them before their declaration will result in a `ReferenceError`.
- Function declarations are fully hoisted, meaning you can call a function before its declaration in the code. However, function expressions and arrow functions are not hoisted in the same way, and trying to call them before their declaration will result in a `TypeError`.

## Example of Hoisting
```javascript
// Example of hoisting with var
console.log(x); // undefined (hoisted, but not initialized)
var x = 5;
console.log(x); // 5 (initialized)
// Example of hoisting with let and const
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10; // y is hoisted but not initialized
console.log(y); // 10 (initialized)
// Example of hoisting with function declarations
function greet() {
    console.log("Hello, world!");
}
greet(); // "Hello, world!" (function declaration is hoisted)
// Example of hoisting with function expressions
const sayHello = function() {
    console.log("Hello, again!");
};
sayHello(); // "Hello, again!" (function expression is not hoisted)
```
# Hoisting example in functions and blocks
```javascript
// Function declaration hoisting
console.log(myFunction()); // "Hello from myFunction!" (function declaration is hoisted)
function myFunction() {
    return "Hello from myFunction!";
}
// Function expression hoisting
try {
    console.log(myOtherFunction()); // TypeError: myOtherFunction is not a function (function expression is not hoisted)
} catch (error) {
    console.error(error);
}   
const myOtherFunction = function() {
    return "Hello from myOtherFunction!";
};
// Block scope hoisting with let and const
{
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 20; // a is hoisted but not initialized
    console.log(a); // 20 (initialized)
}
{
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 30; // b is hoisted but not initialized
    console.log(b); // 30 (initialized)
}
``` 
