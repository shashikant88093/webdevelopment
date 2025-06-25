# Error() Constructor

The `Error` constructor in JavaScript is used to create error objects. These objects are typically used for error handling and debugging.

## Syntax

You can create an error object using either the `new` keyword or by calling `Error` as a function. Both approaches are equivalent.

```js
new Error()
new Error(message)
new Error(message, options)
new Error(message, fileName)
new Error(message, fileName, lineNumber)

Error()
Error(message)
Error(message, options)
Error(message, fileName)
Error(message, fileName, lineNumber)
```

- `message` (optional): A human-readable description of the error.
- `options` (optional): An object that may include a `cause` property, representing the original error.
- `fileName` (non-standard): The name of the file containing the code that caused the exception.
- `lineNumber` (non-standard): The line number of the code that caused the exception.

> **Note:** The `fileName` and `lineNumber` parameters are non-standard and may not be supported in all environments.

## Usage

### Function Call or Constructor

You can create an error object either by calling `Error` as a function or by using the `new` keyword:

```js
const x = Error("I was created using a function call!");
const y = new Error('I was constructed via the "new" keyword!');
```

Both `x` and `y` are instances of `Error`.

### Rethrowing an Error with a Cause

You can catch an error and re-throw it with a new message, while preserving the original error as the cause:

```js
try {
    frameworkThatCanThrow();
} catch (err) {
    throw new Error("New error message", { cause: err });
}
```

This allows you to chain errors and provide more context.

### Omitting the `options` Argument

JavaScript only reads `options.cause` if `options` is an object. If you omit `options`, pass a primitive value, or pass an object without a `cause` property, the created error object will not have a `cause` property.

```js
// Omitting options
const error1 = new Error("Error message");
console.log("cause" in error1); // false

// Passing a primitive value as options
const error2 = new Error("Error message", "");
console.log("cause" in error2); // false

// Passing an object without a cause property
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false
```

## Properties

- `name`: The name of the error (default is `"Error"`).
- `message`: The error message.
- `cause`: The original error, if provided via the `options` object.

## Example: Custom Error Types

You can create custom error types by extending the `Error` class:

```js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

throw new ValidationError("Invalid input!");
```

## Specifications

Refer to the [ECMAScript specification](https://tc39.es/ecma262/#sec-error-objects) for more details on the `Error` constructor and its behavior.
