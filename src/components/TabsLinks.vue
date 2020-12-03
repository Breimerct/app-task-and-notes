<template>
  <div>
    <q-tabs 
    v-model="tab" 
    dense 
    align="justify"
    switch-indicator
    indicator-color="primary"
    class="text-black"
    >
      <q-route-tab
        v-for="(link, index) in links"
        :key="index"
        :to="{name: link.to}"
        :icon="link.icon"
        :label="link.name"
        exact
      />
    </q-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Links {
  to: string;
  icon: string;
  name: string;
}

export default Vue.extend({
  data(): {
    tab: string;
    links: Links[];
  } {
    return {
      tab: '',
      links: [
        {
          icon: 'eva-home-outline',
          to: 'home',
          name: 'Inicio',
        }
      ],
    };
  },
});
</script>

<style scoped>
</style>