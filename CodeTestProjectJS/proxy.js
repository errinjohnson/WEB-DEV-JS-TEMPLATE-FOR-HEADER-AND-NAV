import express from 'express';
import {
    createProxyMiddleware
} from 'http-proxy-middleware';

const app = express();

// Define the path you want to proxy
const path = '/foxnews';

// Define the target URL you want to proxy to
const target = 'https://foxnews.com';

// Create a proxy middleware
const proxy = createProxyMiddleware(path, {
    target
});

// Use the proxy middleware for all requests to the path
app.use(path, proxy);

// Start the server
app.listen(3000, () => {
    console.log('Proxy server listening on port 3000');
});