module.exports = () => {
    if (process.env.PROXY_ENABLE !== 'true') return {};

    const proxy = {};
    const proxy_target = process.env.PROXY_TARGET;
    const proxy_prefix = process.env.PROXY_PREFIX;

    if (proxy_target !== '' && proxy_prefix !== '') {
        let path_rewrite = {};
        path_rewrite['^' + proxy_prefix] = '';
        proxy[proxy_prefix] = {
            target: proxy_target,
            changeOrigin: true,
            ws: true,
            pathRewrite: path_rewrite,
        };
    }

    return {proxy: proxy};
}
