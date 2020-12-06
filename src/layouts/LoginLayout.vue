<template>
<q-layout class="login-layout">
  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginLayout'
})

</script>

<style lang="scss" scoped>
  .login-layout{
    position: initial;
    background-image: url("../assets/wallpaper-login.jpg");
    background-size: cover;
    .q-page-container{
      position: initial;
    }
  }
</style>
