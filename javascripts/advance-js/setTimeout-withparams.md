# ⏱️ setTimeout with Parameters

You can pass parameters to the function used in `setTimeout` by providing additional arguments after the delay.

## ✅ Syntax

```javascript
setTimeout(function, delay, param1, param2, ...);
```

## 📌 Example

```javascript
function greet(name, age) {
    console.log(`Hello ${name}, age ${age}`);
}

setTimeout(greet, 2000, "Shashikant", 30);
```

⏳ **Output after 2 seconds:**
```
Hello Shashikant, age 30
```

## 💡 Example with Arrow Function (using closures)

You can also use an arrow function to pass parameters:

```javascript
const name = "Shashi";
const age = 30;

setTimeout(() => {
    console.log(`Hi ${name}, you are ${age}`);
}, 1500);
```

## 🧪 Why use params in setTimeout?

- Delay a function that requires arguments.
- Avoid wrapping the function manually in another function.

## 🔄 Real-world Example

```javascript
function fetchData(apiUrl) {
    console.log(`Fetching data from ${apiUrl}`);
}

setTimeout(fetchData, 1000, "https://api.example.com/data");
```
