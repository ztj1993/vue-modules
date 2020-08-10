const glob = require('glob');
const path = require('path');

module.exports = (config) => {
    const options = {};
    const files = glob.sync('src/**/*.definition.js');

    files.forEach(function (file) {
        const name = path.basename(file).replace('.definition.js', '');
        options[name] = path.join(process.env.INIT_CWD, file);
    });

    config.plugin().use(require.resolve('webpack/lib/ProvidePlugin'), [{
        ...options,
    }]);
}
