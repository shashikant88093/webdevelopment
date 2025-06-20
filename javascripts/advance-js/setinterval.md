# 🔁 setInterval in JavaScript

`setInterval` is used to repeatedly execute a function at a specified time interval (in milliseconds).

## ✅ Syntax

```javascript
setInterval(function, delay, ...args);
```
- **function**: Function to execute.
- **delay**: Time in milliseconds between each execution.
- **...args**: Optional parameters to pass to the function.

## 📌 Basic Example

```javascript
setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000);
```
**Output (every 2 seconds):**
```
Hello every 2 seconds
Hello every 2 seconds
...
```

## 🧪 Example with Parameters

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

setInterval(greet, 1000, "Shashikant");
```

## 🛑 Stop setInterval

Use `clearInterval(intervalId)` to stop it:

```javascript
const id = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Stopped!");
}, 5000);
```
**Output:**
```
Running...   // at 1s
Running...   // at 2s
Running...   // at 3s
Running...   // at 4s
Stopped!     // at 5s
```

## 🧠 Key Notes

- It's asynchronous and does not block the main thread.
- Runs repeatedly until stopped by `clearInterval()`.
- If the function takes longer to run than the delay, executions may overlap or queue (event loop dependent).

## 🔄 Common Use Cases

- Creating clocks or countdowns
- Polling APIs
- Repeating animations or status checks

