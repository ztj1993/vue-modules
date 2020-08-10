module.exports = (config) => {
    // 是否启用单 JS 文件功能
    if (process.env.SINGLE_JS_ENABLE !== 'true') return {};
    // 配置单 JS 文件
    config.optimization.splitChunks(false);
}
