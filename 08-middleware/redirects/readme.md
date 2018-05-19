# Middleware

Middleware is the organizing principle of Express apps. Middleware works like a bucket brigade, passing a request from one function to the next.

Each function in the middleware stack gets access to a request object, a response object, and a next function, which can be called to pass control to the next middleware function in the stack.

Crucially, all middleware functions must do one of two things: either return a response or call next(). If a middleware function does not end with one of these behaviors, it will hang and your app will be blocked.

In Express apps, we can distinguish between built-in middleware (for instance, express.static, which is used to expose folders containing static assets like CSS and client-side JavaScript), third-party middleware (like Morgan, which you'll learn about in the next assignment), and custom middleware, which we write ourselves.

In many cases, the middleware you'll need has already been written. If you find yourself creating custom middleware, do a quick search to see if there's existing third-party middleware that accomplishes the same goal. The Express documentation even includes a list of popular middleware modules.

The beauty of the middleware-centric approach to server-side web development is that it encourages us to write modular, reusable, functional code. Let's explore some examples.