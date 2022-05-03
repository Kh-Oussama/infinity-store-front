const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = app => {
    app.use(
        createProxyMiddleware('/v1/deliveryfees/:id',
            {
                target: 'https://api.yalidine.app',
                changeOrigin: true,
            }
            )
    )
}