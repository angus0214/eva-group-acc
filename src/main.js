import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
