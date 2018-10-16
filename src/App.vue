<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Report from './components/Report.vue'
import Navbar from './components/Navbar.vue'
import {db} from './firebase';

export default {
  name: 'app',
  components: {
    Report, Navbar
  },
  data() {
    return {
      reports: {}
    }
  },

  firebase: {
    reports: {
      source: db.ref("HelpReport").orderByChild('created_at'),
      asObject: true,
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  }

}
</script>

<style>
#app {

}
</style>
