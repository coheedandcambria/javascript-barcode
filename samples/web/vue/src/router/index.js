//import { BarcodeScanner } from 'dynamsoft-javascript-barcode';
import Vue from 'vue'
import VueRouter from  'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import BarcodeScanner from '../components/BarcodeScanner.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld
  },
  {
    path: '/profile',
    name: 'profile',
    component: BarcodeScanner
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router