# JavaScript Pre-Increment Operator (`++variable`)

The pre-increment operator in JavaScript (`++variable`) increases the value of a variable by 1 **before** it is used in an expression. This is a fundamental concept in JavaScript and is commonly used in loops and arithmetic operations.

---

## 🔍 Syntax

```js
++x
```

---

## 🔧 How It Works

- The variable is incremented by 1 **immediately**.
- The **new incremented value** is returned and used in the expression.

---

## ✅ Example

```js
let a = 5;
let b = ++a;  // a is incremented first, then b is assigned

console.log(a); // 6
console.log(b); // 6
```

---

## ⚠️ Compare With Post-Increment

The post-increment operator (`variable++`) increases the value **after** the current expression is evaluated.

```js
let a = 5;
let b = a++;  // b is assigned first, then a is incremented

console.log(a); // 6
console.log(b); // 5
```

---

## 📌 Summary Table

| Operator | When it increments      | Value returned |
|----------|------------------------|---------------|
| `++x`    | Before evaluation      | New value     |
| `x++`    | After evaluation       | Old value     |

---

## 🔄 Use in Loops

The pre-increment operator is often used in loops for concise incrementing:

```js
for (let i = 0; i < 5; ) {
    console.log(++i); // Prints 1 to 5
}
```

---

## 📝 Key Points

- Pre-increment changes the variable **before** its value is used.
- Useful for situations where the incremented value is needed immediately.
- Helps write concise and readable code, especially in loops and arithmetic expressions.
