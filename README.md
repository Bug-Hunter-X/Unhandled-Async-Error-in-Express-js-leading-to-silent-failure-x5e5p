# Unhandled Async Error in Express.js

This repository demonstrates a common error in Express.js applications where asynchronous operations are not properly handled, leading to silent failures.  The server might crash or simply not respond correctly without providing any indication of the error to the client.

## Bug Description
The `bug.js` file contains an Express.js server with an asynchronous function (`doSomethingAsync`) that might throw an error.  The error handling within the route handler only logs the error to the console but does not send a proper error response to the client. This results in a poor user experience and makes debugging difficult.

## Solution
The `bugSolution.js` file shows the corrected version that uses a `try...catch` block to handle potential errors more effectively and sends appropriate error responses to the client using `res.status()`.  A general error handler is also included to catch errors that aren't caught within specific routes.