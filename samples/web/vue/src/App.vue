<template>
  <div id="app">
    <router-link to='/'>HelloWorld</router-link>
    <router-link to='/profile'>Profile</router-link>
    <router-view  />
    <!-- <HelloWorld title="Welcome to DBRJS VUE sample"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BarcodeScanner from './components/BarcodeScanner.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, BarcodeScanner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
