# What is module in Node.js?
# A module in Node.js is a reusable piece of code that encapsulates functionality and can be imported and used in other parts of an application. Modules help organize code, promote reusability, and manage dependencies effectively.
# Node.js has a built-in module system that allows developers to create and use modules easily.

# Modules can be created using CommonJS or ES module syntax, and they can export functions, objects, or variables that can be imported by other modules.

# Node.js provides a rich set of built-in modules, such as 'fs' for file system operations, 'http' for creating web servers, and 'path' for working with file paths.
# Additionally, developers can create their own custom modules to encapsulate specific functionality and share them across their applications.# Modules can be imported using the `require` function in CommonJS or the `import` statement
# in ES modules. This allows developers to break down their code into smaller, manageable pieces,
# making it easier to maintain and test.

## Example of a simple module in Node.js:

```javascript
// mathModule.js
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
module.exports = {
    add,
    subtract
};
```

```javascript

// app.js
const math = require('./mathModule');
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2
```
# Understanding Modules in Node.js
# Node.js uses a module system to organize code into reusable components.
# Modules can be created using CommonJS or ES module syntax, and they can export functions,
# objects, or variables that can be imported by other modules.
# Node.js provides a rich set of built-in modules, such as 'fs' for file
# system operations, 'http' for creating web servers, and 'path' for working with file paths.
# Additionally, developers can create their own custom modules to encapsulate specific functionality
# and share them across their applications.

## Example with Arrow functions and ES6 syntax:

```javascript// mathModule.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = {
    add,
    subtract
};
```

```javascript// app.js
import { add, subtract } from './mathModule.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```
# In this example, we define a simple module `mathModule.js` that exports two functions
# `add` and `subtract`. In `app.js`, we import these functions using the `require` function in CommonJS or the `import` statement in ES modules, allowing us to use them in our application.
