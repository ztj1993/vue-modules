module.exports = (config) => {
    // 是否启用 DataUri 功能
    if (process.env.DATA_URI_ENABLE !== 'true') return {};
    // 配置 DataUri
    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, {limit: 102400}));
}
