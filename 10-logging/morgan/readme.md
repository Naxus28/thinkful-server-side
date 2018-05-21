# Server side logging

Morgan is the go-to HTTP logging middleware for Express apps. With a few lines of setup code, we can use Morgan to get nicely formatted, standardized logs of all requests made to our server.

Morgan middleware instances get initialized with two parameters, morgan(format, options). The format parameter determines what will appear in our log entries, and we can choose between preset formats and creating a custom formatter. In the example above we've passed common, which gives us standard Apache server style logging.

You can create a custom format for log entries by supplying a string like `app.use(morgan(':date[iso] :method :url :response-time'));`. Try commenting out the line using the common preset, and replace it with the custom formatter above, and observe the difference. Morgan features a set of pre-existing tokens that you can use in the format string to get data about the request into your logs (for instance, :method for the request method and :url for the request URL).

