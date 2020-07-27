import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './krouter'
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.prototype.$xxxx = "xxxx";
Vue.prototype.$reverseText = function (propertyName) {
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');