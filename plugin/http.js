import axios from 'axios'

const HttpPlugin = {
    install: (Vue, options) => {
        Vue.prototype.$http = axios.create({
            ...options,
        });
    },
};

export default HttpPlugin;
