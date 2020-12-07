<template>
  <q-page class="row items-start justify-center">
    <div class="col-12 q-ma-md">
      <div class="row q-pa-md">
        <div class="col-12">
          <q-editor
            ref="editor"
            v-model="text"
            min-height="5rem"
            @keypress.enter="saveTask"
            :definitions="{
              save: {
                tip: 'Save your work',
                icon: 'save',
                label: 'Save',
                handler: saveTask
              }
            }"
            :toolbar="[
              ['bold', 'italic', 'underline'],
              ['upload', 'save']
              ]"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-list separator>
            <tasks-list
              v-for="task of getTasks"
              :key="task.id"
              :id="task.id"
              :state="task.state"
              :taskName="task.name"
              @deleteTask="deleteTask"
              @updateTask="updateTask"
            />
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from 'vuex'
import swal from 'sweetalert'

export default Vue.extend({
  name: 'PageIndex',
  components: {
    TasksList: () => import('../components/TasksList.vue')
  },

  data(): {
    text: string;
    isVisible: boolean
  } {
    return {
      text: '',
      isVisible: false
    };
  },

  computed: {
    ...mapGetters('moduleTask', ['getTasks', 'getUser'])
  },

  methods: {
    ...mapActions('moduleTask', ['deleteTasks', 'saveTasks', 'updateTasks']),

    saveTask () {
      this.saveTasks({
        id: Date.now(),
        nameTask: this.text
      })
      this.text = ''
      // @ts-ignore
      this.$refs.editor.focus()
    },

    deleteTask (id: number) {
      swal(`Hola ${this.getUser.name}`,'¿Está seguro que quiere eliminar está tarea?',{
        buttons:['NO', 'SI'],
        closeOnClickOutside: false
      })
      .then((val) => {
        if (val) {
          this.deleteTasks({id: id})
        }
      })
    },

    updateTask (task: any) {
      if (!task.state) {
        this.updateTasks({
          id: task.id,
          update: {
            state: true
          }
        })
      }
    }
  },

  mounted() {
    // @ts-ignore
    this.$refs.editor.focus()
  }
});
</script>
