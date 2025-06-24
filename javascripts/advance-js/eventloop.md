# The JavaScript Event Loop Explained with Examples

**Author:** Dzmitry Ihnatovich  
**Published:** December 16, 2024 · 5 min read · 179 views · 6 likes  

The event loop is a core concept in JavaScript that enables non-blocking, asynchronous behavior. Understanding how the event loop works is essential to mastering JavaScript, especially for building responsive web applications. This article dives into the event loop, explains the different types of tasks in JavaScript, and provides ten examples to solidify your understanding.

---

## What is the Event Loop?

At its core, the JavaScript event loop is responsible for managing the execution of code, collecting and processing events, and executing queued tasks. JavaScript operates in a single-threaded environment, meaning only one piece of code runs at a time. The event loop ensures that tasks are executed in the correct order, enabling asynchronous programming.

To explain it in simple terms, imagine you’re running a to-do list. The event loop is like a manager that ensures tasks are completed in the right order, depending on their type and urgency.

---

### Components of the Event Loop

1. **Call Stack:** Keeps track of function calls. When a function is invoked, it is pushed onto the stack. When the function finishes execution, it is popped off.
2. **Web APIs:** Provides browser features like `setTimeout`, DOM events, and HTTP requests. These APIs handle asynchronous operations.
3. **Task Queue (Callback Queue):** Stores tasks waiting to be executed after the call stack is empty. These tasks are queued by `setTimeout`, `setInterval`, or other APIs.
4. **Microtask Queue:** A higher-priority queue for promises and `MutationObserver` callbacks. Microtasks are executed before tasks in the task queue.
5. **Event Loop:** Continuously checks if the call stack is empty and pushes tasks from the microtask queue or task queue to the call stack for execution.

---

### How It Works (Simplified with an Analogy)

- **Your Main Task:** JavaScript executes code line by line in a single thread (like following a recipe). This is called the call stack.
- **Waiting Tasks (Events):** Some tasks take time (e.g., fetching data from the internet, timers). Instead of blocking progress, these tasks are sent to “wait in line” in a queue (known as the event queue).
- **The Manager (Event Loop):** The event loop constantly checks: Is the main task (call stack) empty? Are there any tasks waiting in the queue? If yes, it picks a task from the queue and moves it to the stack for execution.

---

### Event Loop Analogy

Imagine you’re at a restaurant:
- **The Chef (Call Stack):** The chef prepares one order at a time. If a dish takes a long time to cook, the chef moves it to a separate station (like the oven or timer) and starts working on the next order.
- **The Waiter (Event Queue):** The waiter keeps an eye on all pending tasks (like dishes in the oven) and brings them back to the chef once they’re ready.
- **The Manager (Event Loop):** The manager ensures the chef only works on one task at a time and keeps the workflow smooth.

---

## Types of Tasks in JavaScript

1. **Synchronous Tasks:** Executed immediately on the call stack (e.g., function calls, variable declarations).
2. **Microtasks:** High-priority asynchronous tasks, such as Promise callbacks and `queueMicrotask`.
3. **Macrotasks:** Lower-priority asynchronous tasks, like `setTimeout`, `setInterval`, and DOM events.

---

### Order of Execution

1. Execute all synchronous tasks on the call stack.
2. Process all microtasks in the microtask queue.
3. Process the first task in the macrotask queue.
4. Repeat.

---

## Examples

### Example 1: Basic Synchronous and Asynchronous Code

```javascript
console.log('A'); // Synchronous
setTimeout(() => {
    console.log('B'); // Macrotask
}, 0);
console.log('C'); // Synchronous
```
**Output:** A, C, B

---

### Example 2: Microtasks with Promises

```javascript
console.log('A');
setTimeout(() => {
    console.log('B'); // Macrotask
}, 0);
Promise.resolve().then(() => {
    console.log('C'); // Microtask
});
console.log('D');
```
**Output:** A, D, C, B

---

### Example 3: Nested Microtasks

```javascript
Promise.resolve().then(() => {
    console.log('A');
    Promise.resolve().then(() => console.log('B'));
});
console.log('C');
```
**Output:** C, A, B

---

### Example 4: setTimeout vs setImmediate (Node.js only)

```javascript
setTimeout(() => console.log('A'), 0); // Macrotask
setImmediate(() => console.log('B')); // Macrotask in Node.js
```
**Output (depends on Node.js version):** Generally A, then B.

---

### Example 5: Event Listener and Promises

```javascript
document.body.addEventListener('click', () => {
    console.log('Click Event'); // Macrotask
});
Promise.resolve().then(() => console.log('Promise Resolved')); // Microtask
console.log('End');
```
**Output:** End, Promise Resolved, Click Event

---

### Example 6: Interleaving Promises and setTimeout

```javascript
setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
setTimeout(() => console.log('C'), 0);
Promise.resolve().then(() => console.log('D'));
```
**Output:** B, D, A, C

---

### Example 7: Nested Promises with setTimeout

```javascript
console.log('A');
setTimeout(() => {
    console.log('B');
    Promise.resolve().then(() => {
        console.log('C');
    });
}, 0);
Promise.resolve().then(() => {
    console.log('D');
    setTimeout(() => {
        console.log('E');
    }, 0);
});
console.log('F');
```
**Output:** A, F, D, B, C, E

---

### Example 8: Promise Chaining with setTimeout

```javascript
console.log('1');
setTimeout(() => {
    console.log('2');
    Promise.resolve().then(() => {
        console.log('3');
    }).then(() => {
        console.log('4');
    });
}, 0);
Promise.resolve().then(() => {
    console.log('5');
}).then(() => {
    console.log('6');
});
console.log('7');
```
**Output:** 1, 7, 5, 6, 2, 3, 4

---

### Example 9: Mixing Promise Resolution with Delays

```javascript
console.log('Start');
setTimeout(() => {
    console.log('Timeout 1');
}, 0);
Promise.resolve().then(() => {
    console.log('Promise 1');
    setTimeout(() => {
        console.log('Timeout 2');
    }, 0);
    return Promise.resolve();
}).then(() => {
    console.log('Promise 2');
});
console.log('End');
```
**Output:** Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2

---

### Example 10: Deeply Nested Promises in a Timer

```javascript
setTimeout(() => {
    console.log('Timer 1');
    Promise.resolve().then(() => {
        console.log('Microtask 1');
        Promise.resolve().then(() => {
            console.log('Microtask 2');
        });
    });
}, 0);
Promise.resolve().then(() => {
    console.log('Microtask 3');
});
console.log('Main Task');
```
**Output:** Main Task, Microtask 3, Timer 1, Microtask 1, Microtask 2

---

## Key Points

- Microtasks (Promises) always execute before macrotasks (setTimeout, setInterval, etc.).
- Nesting Promises creates a queue of microtasks that execute in the same cycle.
- Timers (setTimeout) will always defer execution to the next event loop cycle, while microtasks resolve immediately after the current task.

---

## Further Reading

- [Loupe: Visualize the JavaScript Event Loop](https://latentflip.com/loupe/)
- [The JavaScript Event Loop Explained with Examples (Medium)](https://medium.com/@ignatovich.dm/the-javascript-event-loop-explained-with-examples-d8f7ddf0861d)