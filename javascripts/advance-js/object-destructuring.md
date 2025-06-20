# Object Destructuring in JavaScript

Object destructuring is a convenient way to extract values from objects and assign them to variables.

## Basic Syntax

```js
const person = {
  name: "Shashikant",
  age: 30,
};

const { name, age } = person;

console.log(name); // "Shashikant"
console.log(age);  // 30
```

## Renaming Variables

```js
const person1 = {
  name: "Shashikant",
  age: 30,
};

const { name: fullName, age: years } = person1;

console.log(fullName); // "Shashikant"
console.log(years);    // 30
```

## Default Values

```js
const user = {
  username: "shashi94",
};

const { username, email = "no-email@example.com" } = user;

console.log(username); // "shashi94"
console.log(email);    // "no-email@example.com"
```

## Nested Destructuring

```js
const user1 = {
  name: "Shashikant",
  address: {
    city: "Patna",
    zip: "800001"
  }
};

const { address: { city, zip } } = user1;

console.log(city); // "Patna"
console.log(zip);  // "800001"
```

## Destructuring in Function Parameters

```js
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

const person2 = { name: "Shashi", age: 30 };
greet(person2); // Hello Shashi, age 30
```

## Combined with Rest Operator

```js
const user2 = {
  id: 1,
  name: "Shashi",
  email: "shashi@example.com",
};

const { id, ...rest } = user2;

console.log(id);   // 1
console.log(rest); // { name: "Shashi", email: "shashi@example.com" }
```
