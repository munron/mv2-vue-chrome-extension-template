import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
window.onload = async () => {
    const searchBar = document.querySelector('.gLFyf.gsfi');
    if (searchBar) {
        searchBar.insertAdjacentHTML(
            'afterend',
            '<div id="app"></div>',
        );
        new Vue({
            render: (h) => h(App),
        }).$mount('#app');
    }
};
