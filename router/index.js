/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import signin from '@/components/signin'
import signup from '@/components/signup'
import dashboard from '@/components/dashboard'
import test from '@/components/test.vue'
import reset from '@/components/reset.vue'


// import test2 from '@/components/test.js'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// export const bus = new Vue();//instantiate events bus



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
     {
      path: '/test',
      name: 'test',
      component: test
    },
     {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/reset/:token',
      name: 'reset-token',
      component: reset
    },



   
  ]
})
