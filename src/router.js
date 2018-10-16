import './firebase';

import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Router from 'vue-router'

import WitnessReport from './components/WitnessReport.vue'
import Report from './components/Report.vue'
import Reports from './components/Reports.vue'
import Logs from './components/Logs.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      default: true,
      name: 'app',
      component: Reports
    },
    {
      path: '/witnessreport',
      name: 'witnessreport',
      component: WitnessReport
    },
    {
      path: '/logs',
      name: 'logs',
      component: Logs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})