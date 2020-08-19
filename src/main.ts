import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
window.onload = async () => {
  const el = document.querySelector('.Header');
  if (el) {
    searchBar.insertAdjacentHTML(
      'afterend',
      '<div id="app"></div>',
    );
    new Vue({
      render: (h) => h(App),
    }).$mount('#app');
  }
};
