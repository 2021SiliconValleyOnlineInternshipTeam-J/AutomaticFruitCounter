// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(proxy('/api',
//         { target: 'http://localhost:8000/' }
//     ));
// }
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api',
        createProxyMiddleware({
            target: 'http://backend:8000',
        })
    );
};