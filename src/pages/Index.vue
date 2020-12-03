<template>
  <q-page class="row items-start justify-center">
    <div class="col-12 q-ma-md">
      <div class="row q-pa-md">
        <div class="col-12">
          <q-editor
            v-model="text"
            min-height="5rem"
            :definitions="{
              save: {
                tip: 'Save your work',
                icon: 'save',
                label: 'Save',
                handler: saveTask
              }
            }"
            :toolbar="[
              ['bold', 'italic', 'strike', 'underline'],
              ['upload', 'save']
              ]"
          />
        </div>
        <div class="col-12 q-mt-md">
          <tasks-list />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageIndex',
  components: { TasksList: () => import('../components/TasksList.vue') },
  data(): {
    text: string;
  } {
    return {
      text: '',
    };
  },

  methods: {
    saveTask () {
      this.$q.notify({
        message: 'Tarea guardada',
        type: 'positive',
        progress: true,
        timeout: 1000,
        position: 'top-right',
        icon: 'eva-checkmark-circle-outline',
        classes: 'text-black'
      })
    }
  },
});
</script>
