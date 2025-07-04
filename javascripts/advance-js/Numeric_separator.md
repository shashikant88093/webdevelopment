# Numeric Separator and BigInt in JavaScript

This guide explains the **Numeric Separator** and **BigInt** features in JavaScript, with syntax, rules, examples, and best practices.

---

## 1. Numeric Separator (`_`)

### ✅ Purpose
Numeric separators make large numeric literals easier to read by allowing underscores (`_`) between digits, similar to how commas or spaces are used in written numbers.

### 📌 Syntax

```js
let billion = 1_000_000_000;
let binary = 0b1010_0001_1000_0101;
let hex = 0xFF_FF_FF;
let float = 123_456.789_123;
```

### 📍 Rules

- Underscores are **only for readability**; they do **not** affect the value.
- You **cannot** use an underscore:
    - At the start or end of a number
    - Next to a decimal point
    - Next to another underscore (no double underscores)
    - In non-numeric contexts (e.g., variable names)

#### ❌ Invalid Usage

```js
let wrong = _1000;       // SyntaxError
let alsoWrong = 1000_;   // SyntaxError
let badFloat = 1_.23;    // SyntaxError
let multi = 1__000;      // SyntaxError
let badExp = 1e_10;      // SyntaxError
```

#### ✅ Valid Usage

```js
let price = 99_999_999;
let hex = 0xFF_FF;
let float = 123_456.789_123;
let binary = 0b1010_0001_1000_0101;
```

### 💡 Best Practices

- Use underscores to group digits in thousands, millions, etc., for better readability.
- Avoid overusing or placing underscores inconsistently.

---

## 2. BigInt

### ✅ Purpose

`BigInt` allows you to work with integers **larger than** `Number.MAX_SAFE_INTEGER` (`2^53 - 1`), which is the largest integer JavaScript can safely represent with the `Number` type.

### 📌 Syntax

```js
let big = 123456789012345678901234567890n; // Add 'n' at the end
let bigFromFunc = BigInt("123456789012345678901234567890");
```

### 🔍 Example

```js
console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(9007199254740991n + 1n);      // 9007199254740992n
console.log(9007199254740991n + 2n);      // 9007199254740993n ✅
```

### ⚠️ Mixing BigInt and Number

- You **cannot** mix `BigInt` and `Number` types in operations directly.

```js
let big = 10n;
let num = 5;
// console.log(big + num); // ❌ TypeError: Cannot mix BigInt and other types
console.log(big + BigInt(num)); // ✅ 15n
```

### 💡 Best Practices

- Use `BigInt` only when you need to handle very large integers.
- Avoid using `BigInt` for floating-point or non-integer values.

---

## 📊 Feature Comparison Table

| Feature           | Example                     | Use Case                                 |
|-------------------|----------------------------|------------------------------------------|
| Numeric Separator | `1_000_000`                | Readability of large numbers             |
| BigInt            | `1234567890123456789n`     | Storing very large integers safely       |

---

## 📝 Additional Notes

- **Numeric separators** are supported in ES2021 and later.
- **BigInt** is supported in most modern browsers and Node.js (since v10.4.0).
- Both features improve code clarity and reliability when dealing with large numbers.

---

