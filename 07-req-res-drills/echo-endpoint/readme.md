# Echo endpoint

For this drill, you need to implement a GET endpoint at /echo/:what, where :what is a named route parameter.

Create an endpoint that returns an object with keys for hostname, query, and params.

the hostname property should be the host for the app.
the query property should be an object with the URL query parameters sent in the request (if any)
the params property should be an object with the named route parameters (in this case, it will only have an entry for "what").
For example, a request to https://[YOUR-RANDOM-SUBDOMAIN].glitch.me/echo/pets?cat=meow&dog=woof should receive a JSON response that looks like this:

```javascript
{
    "hostname": "[YOUR-RANDOM-SUBDOMAIN].glitch.me",
    "query": {
        "cat": "meow",
        "dog": "woof"
    },
    "params": {
      "what": "pets"
    }
}
```

Note that the values for all of these can be found on the request object, as documented here. To get started, open this remixed starter app.

To see the results of your work, click the "Show Live" button near the top left corner of the Glitch. That will open a new browser tab that by default makes a GET request to https://[YOUR-RANDOM-SUBDOMAIN].glitch.me. Remember to add the rest of the URL including query parameters when making requests from your browser.