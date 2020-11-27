<template>
  <q-page class="row items-center justify-evenly">
    <h1>{{ title | uppercase }}</h1>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageIndex',
  components: {},
  data(): {title: string} {
    return { 
      title: '' 
      }
  },
  mounted(): void {
    this.title = 'roxana task!'
  }
});
</script>
