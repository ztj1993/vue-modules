const glob = require('glob');
const path = require('path');

module.exports = () => {
    // 是否启用 Pages 功能
    if (process.env.PAGES_ENABLE !== 'true') return {};

    let pages = {};
    let entries = [];

    entries.push(...glob.sync('src/**/entry.options.js'));
    entries.push(...glob.sync('src/**/entry/options.js'));

    entries.forEach(function (entry) {
        let page;
        if (process.env.INIT_CWD) {
            page = path.join(process.env.INIT_CWD, entry);
        } else {
            page = entry;
        }
        pages = Object.assign(pages, require(page));
    });

    return {pages: pages};
}
