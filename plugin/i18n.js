import VueI18n from 'vue-i18n'

const I18nPlugin = {
    install: (Vue, options = {}) => {
        Vue.use(VueI18n);

        options = Object.assign({
            locale: process.env.VUE_APP_I18N_LOCALE || 'zh-CN',
            fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-CN',
            silentTranslationWarn: true,
            formatFallbackMessages: true,
            messages: [],
        }, options);

        Vue.prototype._i18n = new VueI18n(options);
    },
};

export default I18nPlugin;
