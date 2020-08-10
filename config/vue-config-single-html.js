module.exports = (config, options) => {
    // 是否启用单文件 HTML 功能
    if (process.env.SINGLE_HTML_ENABLE !== 'true') return {};

    // 引入主功能插件
    config.plugin('inline-source').use(require('html-webpack-inline-source-plugin'));

    // 是否多个页面
    if (options.pages) {
        Object.keys(options.pages).forEach(page => {
            config.plugins.delete('prefetch-' + page);
            config.plugins.delete('preload-' + page);
            config.plugin('html-' + page).tap((args) => {
                args[0].inlineSource = '(.css|.js)';
                return args
            });
        });
    } else {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
        config.plugin('html').tap((args) => {
            args[0].inlineSource = '(.css|.js)';
            return args
        });
    }
}
