<template>

  <q-list separator>
    <q-item tag="label" v-ripple>
      <q-item-section avatar>
        <q-radio v-model="value" val="teal" color="primary" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Teal</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TasksList',

  data(): {
    value: string
  }{
    return {
      value: ''
    }
  }
})
</script>

<style scoped>

</style>
