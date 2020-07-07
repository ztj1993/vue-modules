import Vue from 'vue'

let BusPlugin = {
    install: () => {
        Vue.prototype.$bus = new Vue();
    },
};

export default BusPlugin;
