# Types in TypeScript

## 🟦 What Are Types?

> **Types** in TypeScript describe what kind of data a variable can hold. TypeScript is a **statically typed superset of JavaScript**, which enables catching errors during development before code runs.

---

## 🧱 Basic Types

| Type        | Description                              | Example                        |
| ----------- | ---------------------------------------- | ------------------------------ |
| `string`    | Text values                              | `"hello"`                      |
| `number`    | Numeric values (int, float, etc.)        | `123`, `3.14`                  |
| `boolean`   | True or false                            | `true`, `false`                |
| `null`      | Explicit null value                      | `null`                         |
| `undefined` | Variable declared but not assigned       | `undefined`                    |
| `any`       | Opts out of type checking                | Can hold any value             |
| `void`      | For functions that don't return anything | `function log(): void {}`      |
| `never`     | Functions that never return              | Throws errors or infinite loop |

---

## 🧰 Common Type Usage

### ✅ Arrays

```ts
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];
```

### ✅ Tuples

```ts
let user: [string, number] = ["Alice", 30];
```

### ✅ Enums

```ts
enum Role {
  Admin,
  User,
  Guest
}
let role: Role = Role.Admin;
```

### ✅ Objects

```ts
let person: { name: string; age: number } = {
  name: "John",
  age: 25
};
```

### ✅ Union Types

```ts
let id: string | number;
id = "abc"; // or id = 123;
```

### ✅ Literal Types

```ts
let direction: "left" | "right";
direction = "left";
```

### ✅ Type Aliases

```ts
type User = {
  name: string;
  age: number;
};

const user: User = { name: "Bob", age: 40 };
```

### ✅ Interfaces

```ts
interface Product {
  id: number;
  name: string;
}

const p: Product = { id: 1, name: "Phone" };
```

### ✅ Functions with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 🧠 Type Inference

TypeScript can infer types:

```ts
let count = 5; // inferred as number
```

---

## 📌 Advanced Types Overview

### 🔸 Intersection Types

```ts
type A = { name: string };
type B = { age: number };
type C = A & B; // C has both name and age
```

### 🔸 Type Guards

```ts
function isString(value: any): value is string {
  return typeof value === 'string';
}
```

### 🔸 Generics

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

## ✅ Summary Table

| Concept            | Use Case                                      |
| ------------------ | --------------------------------------------- |
| Basic Types        | Primitive values like string, number, boolean |
| Arrays/Tuples      | Collections of known or fixed types           |
| Unions/Literals    | Multiple possible types or specific values    |
| Aliases/Interfaces | Custom structures for reusability             |
| Functions          | Type-safe function definitions                |
| Generics           | Reusable code that works with any type        |
| Inference          | Auto-detection of type by the compiler        |

---


# what is difference between type and interface in TypeScript?
- **Type** and **Interface** in TypeScript are both used to define the structure of objects, but they have some differences:
  - **Type** can define primitive types, union types, and intersection types, while **Interface** is primarily used for object shapes.
  - **Interface** can be extended using `extends`, allowing for inheritance, while **Type** can use intersection (`&`) to combine multiple types.
  - **Type** can create complex types like tuples and mapped types, while **Interface** is more focused on defining object structures.
  - **Type** can be used to create aliases for any type, while **Interface** is specifically for object-like structures.



# What is difference between unknown and any in TypeScript?
- In TypeScript, `unknown` and `any` are both types that can hold any value, but they serve different purposes:
  - **`any`**: It allows any type of value without type checking. Using `any` effectively opts out of type safety, meaning you can assign any value to a variable of type `any`, and TypeScript will not enforce any checks.
    ```ts
    let value: any;
    value = 42; // number
    value = "Hello"; // string
    ```
  - **`unknown`**: It is a safer alternative to `any`. When a variable is of type `unknown`, you must perform some type checking before using it. This ensures that you handle the value correctly and maintain type safety.
    ```ts
    let value: unknown;
    value = 42; // number
    if (typeof value === "number") {
      console.log(value.toFixed(2)); // Safe to use as number
    }
    ```