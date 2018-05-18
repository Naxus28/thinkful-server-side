This directory is part of the jsonp demo

This server will serve the api that is consumed by the index.js in 'static-server/public/js/index.js'. That api call in that file can only be successful if this server is either configured with CORS or jsonp. For this demo, Our client will send a jsonp request and the server will send a jsonp response. 