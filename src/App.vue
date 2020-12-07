<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'App',

  methods: {
    ...mapActions('moduleTask', ['onAuthStateChange'])
  },

  mounted() {
    this.onAuthStateChange()
  }
});
</script>
