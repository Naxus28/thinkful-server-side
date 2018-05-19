# Cors

In this example, we'll see how to enable cross origin resource sharing (commonly shortened to CORS), which allows browsers to make requests to a server on a domain other than the one the HTML page is hosted on.

That's a mouthful, so let's break it down. Imagine that you're visiting an HTML page at https://www.my-great-site.com. You get back an index.html file from the my-great-site.com site. That HTML file links to a CSS style sheet also hosted on the same domain at my-great-site.com/styles/main.css, as well as a JavaScript file at my-great-site.com/app.js. Inside app.js, there's a call to an API at https://www.my-other-great-site.com/api/my-great-resource. Relative to www.my-great-site.com, which is the domain serving the HTML file, www.my-other-great-site.com is cross-origin — in other words, it's served by a different domain.

As a security precaution, browsers prohibit requests for cross-origin resources from inside a script. There are two ways around this. Some servers are configured to serve JSONP (JSON with padding) which is simply a js file with a single callback function that returns a JS object. JSONP requests are made by injecting <script> tags into the page thereby circumventing cross domain security policies.

The more modern solution to CORS is to configure response headers to allow scripts hosted on other domains to make requests to your app. At a high level, you tell the browser which domains are allowed to make requests for the resource and what methods they can use (GET, POST, PUT, DELETE, etc.).

Specifically, we need the response headers to have the following key/value pairs:

```bash
'Access-Control-Allow-Origin', '*'
'Access-Control-Allow-Headers', 'Content-Type'
'Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE'
```

When the browser makes a cross-origin AJAX request and it gets back a response with these headers, it will not block the request.

Here's what each of the headers mean:

• Access-Control-Allow-Origin is for indicating which origins can access the resource. You can limit this to a single URL, or use the wildcard * to allow any origin to request the resource.

• Access-Control-Allow-Headers is for indicating which headers can be used in the actual request. We're glossing over some detail here, but certain CORS requests actually span two requests: first a preflight request sent to see if it's safe to make the desired request. You don't need to know about that now.

• Access-Control-Allow-Methods also has to do with preflighting. It's basically about indicating which HTTP methods are enabled for CORS requests.

To implement this in an Express app, we could manually set headers for each endpoint, but that would be tedious and violate the DRY (don't repeat yourself) concept. Middleware provides a perfect solution. Here's how we can set up to allow cross-origin resource sharing (with a hat tip to Enable CORS):

```javascript
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  next();
});
```

[Check this site] (https://enable-cors.org/server_expressjs.html)

This middleware function configures the response headers to allow CORS. That's all it takes to make your API accessible by client-side code on other domains.

This fairly minimal CORS setup will work well for most simple use cases, but when your app becomes more complex and you need to support a wider range of HTTP methods, browsers, and configurations we recommend you switch to using this pre-built CORS middleware.

