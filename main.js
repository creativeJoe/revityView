// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import App from './App'
import router from './router'
import navcomp from './components/navComp.vue'
import redbg from './components/redbg.vue'
import companyform from './components/company-form.vue'
import firstnameform from './components/firstname-form.vue'
import lastnameform from './components/lastname-form.vue'
import emailform from './components/emailform.vue'
import passwordform from './components/passwordform.vue'
import footer from './components/footer.vue'
import signup from './components/signup.vue'
import dashboard from './components/dashboard.vue'
import loader from './components/loader.vue'
import signin from './components/signin.vue'
import axios from 'axios'
import axioss from 'vue-axios'
import VueSession from 'vue-session'

Vue.use(VueSession)







export const bus = new Vue();//instantiate events bus


Vue.config.productionTip = false

/* eslint-disable */
//components should be available for use for the element needed
Vue.component('navcomp', navcomp);
Vue.component('redbg', redbg);
Vue.component('companyform', companyform);
Vue.component('firstnameform', firstnameform);
Vue.component('lastnameform', lastnameform);
Vue.component('emailform', emailform);
Vue.component('passwordform', passwordform);
Vue.component('jfooter', footer);
Vue.component('signup', signup);
Vue.component('signin', signin);
Vue.component('dashboard', dashboard);
Vue.component('loader', loader);







new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})



