<template>
  <q-page class="row items-start justify-center q-mt-md">
    <h1>Home</h1>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageIndex',
  components: {},
  data(): {
    title: string;
    text: string;
  } {
    return {
      title: '',
      text: '',
    };
  },
  mounted(): void {
    this.title = 'roxana task!';
  },
});
</script>
