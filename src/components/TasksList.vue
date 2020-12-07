<template>

    <q-item v-ripple="!state">
      <q-item-section>
        <q-item-label :class="{'text-strike': state}" v-html="taskName"/>
      </q-item-section>
      <q-item-section avatar>
        <div class="row flex justify-center">
          <q-btn :disable="state" round flat color="green" icon="eva-checkmark-circle-2-outline" @click="updateTask"/>
          <q-btn round flat color="red" icon="eva-close-circle-outline" @click="deleteTask"/>
        </div>
      </q-item-section>
    </q-item>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TasksList',

  props: {
    id:{
      type: Number,
      required: true
    },
    state: {
      type: Boolean,
      required: true
    },
    taskName: {
      type: String,
      required: true
    }
  },

  data(): {
    value: string
  }{
    return {
      value: ''
    }
  },

  methods: {
    deleteTask () {
      this.$emit('deleteTask', this.id)
    },

    updateTask () {
      this.$emit('updateTask', {id: this.id, state: this.state})
    }
  }

})
</script>

<style scoped>

</style>
