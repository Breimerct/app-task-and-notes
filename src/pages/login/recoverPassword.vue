<template>
  <div class="recover-pass row absolute-center flex flex-center">
    <div class="col-12 text-center q-pa-md">
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
import {mapActions} from 'vuex';

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
      ...mapActions('moduleTask', ['recoverPassword']),
      recoverPassword () {
        this.recoverPassword(this.email)
      }
    }
})
</script>

<style lang="scss" scoped>
 .recover-pass{
   min-height: 100vh;
   width: 50vh;
 }

 @media screen and (max-width: 550px){
   .recover-pass {
     width: 100%;
   }
 }
</style>
