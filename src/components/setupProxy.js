const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = app => {
    app.use(
        createProxyMiddleware('/v1/deliveryfees/',
            {
                target: 'https://api.yalidine.app',
                changeOrigin: true,
            }
            )
    )
}