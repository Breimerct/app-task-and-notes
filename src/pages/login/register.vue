<template>
  <section class="register row justify-center items-center text-center">
    <div class="row full-width q-pa-md">
      <div class="col-12">
        <q-card class="my-card">

          <q-card-section class="q-pt-md">
            <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="form.name"
                label="NOMBRE *"
                type="text"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Por favor escribe tu nombre'
                ]"
              />

              <q-input
                filled
                v-model="form.lastName"
                label="APELLIDO *"
                type="text"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Por favor escribe tu apellido'
                ]"
              />

              <q-input
                filled
                v-model="form.email"
                label="EMAIL *"
                type="email"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Por favor escribe tu email'
                ]"
              />

              <q-input
                filled
                :type="visibility ? 'text' : 'password'"
                v-model="form.pass"
                label="CONTRASEÑA *"
                lazy-rules
                :rules="[
                  val =>
                    (val !== null && val !== '') || 'Por favor escribe tu contraseña',
                    val => (val.length > 7) || 'la contraseña es muy corta'
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    @click="visibility = !visibility"
                    :name="visibility ? 'visibility_off' : 'visibility'"
                    color="gray"
                  />
                </template>
              </q-input>

              <q-input
                filled
                :type="visibilityConfimPass ? 'text' : 'password'"
                v-model="form.confirmPass"
                label="CONFIRMA LA CONTRASEÑA *"
                lazy-rules
                :rules="[
                  val =>
                    (val !== null && val !== '') || 'Por favor escribe tu contraseña',
                    val => (val.length > 7) || 'la contraseña es muy corta',
                    val => (val == form.pass) || 'Las contraseñas no coinciden'
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    @click="visibilityConfimPass = !visibilityConfimPass"
                    :name="visibilityConfimPass ? 'visibility_off' : 'visibility'"
                    color="gray"
                  />
                </template>
              </q-input>

              <div class="row justify-center q-gutter-sm">
                <div>
                  <q-btn label="guardar" type="submit" color="primary" icon="eva-save-outline"/>
                  <q-btn
                    label="limpiar"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                    icon="eva-close-circle-outline"
                  />
                </div>
                <div>
                  <q-btn
                    :class="{ 'q-mt-sm': isMobile }"
                    flat
                    rounded
                    color="primary"
                    label="iniciar sesion"
                    :to="{ name: 'login' }"
                    icon="eva-person-outline"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase'

interface formData {
  name: string;
  lastName: string;
  email: string;
  pass: string;
  confirmPass: string;
}

export default Vue.extend({
  data(): {
    isMobile: boolean;
    visibility: boolean;
    visibilityConfimPass: boolean;
    form: formData;
  } {
    return {
      form: {
        name: '',
        lastName: '',
        email: '',
        pass: '',
        confirmPass: ''
      },
      visibility: false,
      visibilityConfimPass: false,
      isMobile: this.$q.platform.is.mobile ? true : false
    };
  },

  methods: {
    onSubmit() {
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.pass)
        .then(() => {
            let user = firebase.auth().currentUser
            console.log(user)
            user?.sendEmailVerification()
            user?.updateProfile({
                displayName: `${this.form.name} ${this.form.lastName}`
            })
        })
    },
    onReset() {
        this.form.name = ''
        this.form.lastName = ''
        this.form.email = ''
        this.form.pass = ''
        this.form.confirmPass = ''
    }
  }
});
</script>
<style lang="scss" scoped>
.register {
  min-height: 100vh;
}
</style>
