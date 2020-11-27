<template>
  <section class="login row justify-center items-center">
    <div class="row full-width q-pa-md">
      <div class="col-12">
        <q-card class="my-card">
          <img height="170" src="../../assets/login-user.svg" />

          <q-card-section class="q-pt-md">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="form.user"
                label="EMAIL *"
                type="email"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type your email'
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
                    (val !== null && val !== '') || 'Please type your password'
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

              <div class="row justify-center q-gutter-sm">
                <div>
                  <q-btn label="Enviar" type="submit" color="primary" />
                  <q-btn
                    label="limpiar"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                  />
                </div>
                <div>
                  <q-btn
                    :class="{ 'q-mt-sm': isMobile }"
                    flat
                    rounded
                    color="primary"
                    label="Registrarme"
                    :to="{ name: 'register' }"
                  />
                </div>
                <div>
                  <q-btn
                    :class="{ 'q-mt-sm': isMobile }"
                    flat
                    rounded
                    color="primary"
                    label="recuperar contraseña"
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
import firebase from 'firebase';
interface formData {
  user: string;
  pass: string;
}

export default Vue.extend({
  data(): {
    form: formData;
    isMobile: boolean;
    visibility: boolean;
  } {
    return {
      form: {
        user: '',
        pass: ''
      },
      isMobile: this.$q.platform.is.mobile ? true : false,
      visibility: false
    };
  },

  methods: {
    onSubmit(): void {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.user, this.form.pass)
        .then(user => {
          console.log(user);
        });
    },
    onReset() {
      this.form.user = '';
      this.form.pass = '';
    }
  }
});
</script>
<style lang="scss" scoped>
.login {
  min-height: 100vh;
}
.form-login {
  min-width: 100%;
}
</style>
