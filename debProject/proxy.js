const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

http.createServer((req, res) => {
    const targetUrl = req.url.replace('/content/hub/feed.rss', '');
    proxy.web(req, res, {
        target: targetUrl
    });
}).listen(3000);

console.log('Proxy server running on port 3000');