# Event loop in node.js with example
# The event loop is a core concept in Node.js that allows it to handle asynchronous operations efficiently
# It is responsible for executing JavaScript code, collecting and processing events, and executing queued sub-tasks.
# The event loop works in conjunction with the Node.js runtime and the V8 JavaScript engine

# The event loop operates in a single-threaded manner, meaning it can only execute one piece of code at a time.
# However, it can handle multiple asynchronous operations concurrently by offloading them to the system's thread    
# pool or using non-blocking I/O operations.
# The event loop consists of several phases, each with its own queue of callbacks to be executed.
# The main phases of the event loop are:
# 1. **Timers**: This phase executes callbacks scheduled by `setTimeout` and `setInterval`.
# 2. **I/O Callbacks**: This phase executes callbacks for completed I/O operations, such as file reads or network requests.
# 3. **Idle, Prepare**: This phase is used for internal operations and is not typically used by developers.
# 4. **Poll**: This phase retrieves new I/O events and executes their callbacks
# 5. **Check**: This phase executes callbacks scheduled by `setImmediate`.
# 6. **Close Callbacks**: This phase executes callbacks for closed resources, such as sockets or file descriptors.

## Thread Pool
# Node.js uses a thread pool to handle certain types of asynchronous operations, such as file system
# operations, DNS lookups, and cryptographic operations. The thread pool allows Node.js to offload these tasks to worker threads, enabling the event loop to continue processing other events without blocking.




## os.cpus() Method with example    
# The `os.cpus()` method in Node.js is used to retrieve information about the CPU cores available on the system. It returns an array of objects, each representing a CPU core with details such as model, speed, and times for user, nice, sys, idle, and irq.
# This method is useful for monitoring system performance and optimizing resource usage in Node.js applications.

# Example:
```javascript
const os = require('os');
const cpus = os.cpus();
cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}:`);
    console.log(`Model: ${cpu.model}`);
    console.log(`Speed: ${cpu.speed} MHz`);
    console.log(`Times:`, cpu.times);
});
```
console.log(cpus.length)

