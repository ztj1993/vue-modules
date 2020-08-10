import Vue from 'vue'
import I18nPlugin from "../plugin/i18n";

export default {
    init: (files) => {
        let messages = {};
        files && files.keys().map(file => {
            let locale = file.substr(-10, 5);
            messages[locale] = files(file)
        });

        let options = {
            messages: messages,
        };

        Vue.use(I18nPlugin, options);
    },
};

//const files = require.context('../../src', true, /\/locales\/(.*)[a-z]{2}-[A-Z]{2}\.json$/);
