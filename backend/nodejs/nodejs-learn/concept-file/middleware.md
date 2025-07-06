# what is middlerware ?
# Middleware in Node.js
# Middleware is a function that has access to the request and response objects in a Node.js application
# It can modify the request or response, end the request-response cycle, or call the next middleware function in the stack.
# Middleware functions are executed in the order they are defined in the application.
# Middleware is commonly used for tasks such as logging, authentication, error handling, and request parsing.


## Example code for Middleware in Node.js
```javascript   
const express = require('express');
const app = express();
const port = 3000;
// Middleware function to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Call the next middleware function
});

// Middleware function to check authentication
app.use((req, res, next) => {
    const isAuthenticated = true; // Simulate authentication check
    if (isAuthenticated) {
        next(); // User is authenticated, proceed to the next middleware
    } else {
        res.status(401).send('Unauthorized'); // User is not authenticated
    }
});

// Route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Route handler for the /about path
app.get('/about', (req, res) => {
    res.send('About Page');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```
# In this example, we create an Express application and define two middleware functions:
# 1. The first middleware logs the request method and URL to the console.
# 2. The second middleware checks if the user is authenticated. If the user is authenticated, it calls `next()` to proceed to the next middleware or route handler; otherwise, it sends a 401 Unauthorized response.