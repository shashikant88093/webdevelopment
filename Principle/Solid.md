# What is Solid Principles?
- Solid Principles are a set of five design principles in object-oriented programming that aim to make software designs more understandable, flexible, and maintainable. They were introduced by Robert C. Martin (Uncle Bob) and are widely adopted in software development.
- The principles are:
  - **S**: Single Responsibility Principle (SRP)
  - **O**: Open/Closed Principle (OCP)
  - **L**: Liskov Substitution Principle (LSP)
  - **I**: Interface Segregation Principle (ISP)
  - **D**: Dependency Inversion Principle (DIP)
- These principles help developers create systems that are easier to manage, extend, and test, leading to better software quality and reduced technical debt.
- Solid Principles are not specific to any programming language and can be applied in various contexts, including object-oriented programming, functional programming, and even in architectural design.

# Solid Principles
## Single Responsibility Principle (SRP)
- A class should have only one reason to change, meaning it should only have one job or responsibility.
- This principle helps in reducing the complexity of the code and makes it easier to maintain and understand.
- **Example**: A class that handles user authentication should not also handle user notifications. Instead, create separate classes for authentication and notifications.
## Open/Closed Principle (OCP)
- Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
- This means that you should be able to add new functionality to a class without changing its existing code.
- **Example**: Instead of modifying a class to add new features, you can create a new subclass or use interfaces to extend the functionality. For instance, if you have a class for payment processing, you can create subclasses for different payment methods (e.g., CreditCardPayment, PayPalPayment) without changing the original class.
## Liskov Substitution Principle (LSP)
- Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
- This principle ensures that a subclass can stand in for its superclass without causing errors or unexpected behavior.
- **Example**: If you have a class `Bird` with a method `fly()`, and you create a subclass `Penguin` that cannot fly, it violates LSP. Instead, you should create a separate class for flightless birds or use interfaces to define behaviors that can be implemented by different bird types.
## Interface Segregation Principle (ISP)    
- Clients should not be forced to depend on interfaces they do not use.
- This principle encourages the creation of smaller, more specific interfaces rather than a large, general-purpose interface.
- **Example**: Instead of having a single interface `Animal` with methods like `fly()`, `swim()`, and `walk()`, create separate interfaces like `Flyable`, `Swimmable`, and `Walkable`. This way, a class can implement only the interfaces it needs, promoting better separation of concerns.
## Dependency Inversion Principle (DIP)
- High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).
- Abstractions should not depend on details; details should depend on abstractions.
- This principle promotes loose coupling between components, making the system more flexible and easier to test.
- **Example**: Instead of a class directly instantiating its dependencies, it should receive them through constructor injection or method parameters. For instance, if a class `OrderService` depends on a `PaymentService`, it should not create an instance of `PaymentService` directly but rather accept it as a parameter, allowing for easier testing and swapping of implementations.



# SOLID Principles with JavaScript Examples

## What are SOLID Principles?

SOLID is an acronym for **five object-oriented design principles** introduced by **Robert C. Martin (Uncle Bob)**. These principles help in writing **clean, maintainable, and scalable** code.

---

## S - Single Responsibility Principle (SRP)

**Definition**: A class/module should have only **one reason to change**, i.e., it should have **one responsibility**.

### ✅ Good Example:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    console.log(`Saving ${user.name} to the database.`);
  }
}

const user = new User('Alice', 'alice@example.com');
const repo = new UserRepository();
repo.save(user);
```

### ❌ Bad Example:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    console.log(`Saving ${this.name} to the database.`);
  }
}
```

---

## O - Open/Closed Principle (OCP)

**Definition**: Software entities should be **open for extension** but **closed for modification**.

### ✅ Good Example:

```js
class Payment {
  pay(amount) {
    throw new Error("This method should be overridden");
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class PayPalPayment extends Payment {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

function processPayment(paymentMethod, amount) {
  paymentMethod.pay(amount);
}

processPayment(new CreditCardPayment(), 100);
processPayment(new PayPalPayment(), 150);
```

---

## L - Liskov Substitution Principle (LSP)

**Definition**: Subtypes must be substitutable for their base types **without altering the correctness** of the program.

### ❌ Bad Example:

```js
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}
```

### ✅ Good Example:

```js
class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming");
  }
}

const flyBird = new FlyingBird();
flyBird.fly();

const penguin = new Penguin();
penguin.swim();
```

---

## I - Interface Segregation Principle (ISP)

**Definition**: Clients should not be forced to depend on methods they do not use.

### ✅ Good Example:

```js
class Flyable {
  fly() {
    console.log("Flying");
  }
}

class Swimmable {
  swim() {
    console.log("Swimming");
  }
}

class Duck {
  constructor() {
    this.flyable = new Flyable();
    this.swimmable = new Swimmable();
  }

  fly() {
    this.flyable.fly();
  }

  swim() {
    this.swimmable.swim();
  }
}
```

### ❌ Bad Example:

```js
class Animal {
  fly() {}
  swim() {}
  walk() {}
}

class Fish extends Animal {
  fly() {} // Forced to implement unnecessary method
}
```

---

## D - Dependency Inversion Principle (DIP)

**Definition**: High-level modules should **not depend** on low-level modules. Both should depend on **abstractions**.

### ✅ Good Example:

```js
class PaymentService {
  pay(amount) {
    throw new Error("pay method not implemented");
  }
}

class StripePaymentService extends PaymentService {
  pay(amount) {
    console.log(`Paid ${amount} using Stripe`);
  }
}

class OrderService {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  placeOrder(amount) {
    this.paymentService.pay(amount);
  }
}

const stripe = new StripePaymentService();
const orderService = new OrderService(stripe);
orderService.placeOrder(250);
```

### ❌ Bad Example:

```js
class OrderService {
  constructor() {
    this.paymentService = new StripePaymentService(); // tightly coupled
  }

  placeOrder(amount) {
    this.paymentService.pay(amount);
  }
}
```

---

## Summary Table

| Principle | Description                | Problem Solved               |
| --------- | -------------------------- | ---------------------------- |
| SRP       | One class = One job        | Avoids complexity            |
| OCP       | Extend without modify      | Avoid regression bugs        |
| LSP       | Subclasses behave properly | Prevents broken inheritance  |
| ISP       | Small, focused interfaces  | Avoids unnecessary code      |
| DIP       | Depend on abstractions     | Loose coupling, easy testing |

---

