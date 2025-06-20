# setTimeout in JavaScript

Learn how to use `setTimeout` to delay code execution.

---

## ✅ Syntax

```js
setTimeout(function, delay, ...args);
```
- **function**: The function to execute.
- **delay**: Time in milliseconds (1000ms = 1s).
- **...args**: Optional parameters passed to the function.

---

## 📌 Basic Example

```js
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

---

## 💡 Example with Named Function

```js
function greet(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greet, 1500, "Shashikant");
```

---

## ⏹ Cancel a setTimeout

```js
const timerId = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timerId);
```

---

## 🔁 Common Use Case: Delay UI or Simulate Network

```js
console.log("Loading...");
setTimeout(() => {
  console.log("Data fetched!");
}, 1000);
```
