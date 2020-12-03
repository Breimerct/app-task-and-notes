<template>
  <div class="recover-pass row justify-center items-center q-ma-md">
    <div class="col-12 text-center">
      <div class="row">
        <div class="col-12">
          <q-card>
            <img src="../../assets/forgot_password.svg" height="200">
            <q-card-section>
              <q-form @submit.prevent="recoverPassword">
                <q-input
                type="email"
                label="ESCRIBE TU EMAIL"
                v-model.trim="email"
                :rules="[
                  val => (val !== null && val !== '') || 'Este campo es obligatorio'
                ]"
                />

                <q-btn
                  class="q-mx-sm q-mt-md"
                  type="submit"
                  label="Enviar"
                  icon="eva-paper-plane-outline"
                  color="primary"
                />

                <q-btn
                  :to="{name: 'login'}"
                  flat
                  class="q-mt-md text-primary"
                  type="submit"
                  label="Iniciar sesión"
                  icon="eva-person"/>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import  firebase from 'firebase'

export default Vue.extend({
    name: 'recoverPassword',

    data(): {
      email:string
    } {
      return {
        email: ''
      }
    },

    methods: {
      recoverPassword () {
        firebase.auth().sendPasswordResetEmail(this.email)
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: `Revisa tu correo electronico por favor`,
            progress: true,
            position: 'top-right'
          })
          this.$router.push({name: 'login'})
        })
      }
    }
})
</script>

<style lang="scss" scoped>
 .recover-pass{
   min-height: 100vh;
 }
</style>
