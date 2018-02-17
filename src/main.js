import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './vuex';
import './firebase';
import 'babel-polyfill';
import colors from 'vuetify/es5/util/colors';

console.log(colors)
 
Vue.use(Vuetify, {
  theme: store.getters['config/theme']
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
