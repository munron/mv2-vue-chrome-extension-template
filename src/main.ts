import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
window.onload = async () => {
    const searchBar = document.querySelector('.fin_f_t0_d.fin_f_t1_d');
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
