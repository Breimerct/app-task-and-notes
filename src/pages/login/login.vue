<template>
  <section class="login row absolute-center flex flex-center">
    <div class="row full-width q-pa-md">
      <div class="col-12">
        <q-card class="my-card">
          <img height="170" src="../../assets/login-user.svg" />

          <q-card-section class="q-pt-md">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="form.email"
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
                  <q-btn label="Enviar" type="submit" color="primary" icon="eva-paper-plane-outline"/>
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
                    flat
                    rounded
                    color="primary"
                    label="Registrarme"
                    :to="{ name: 'register' }"
                    icon="eva-person"
                  />
                </div>
                <div>
                  <q-btn
                    :to="{name: 'recoverPass'}"
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
import { mapActions } from 'vuex'

interface formData {
  email: string;
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
        email: '',
        pass: ''
      },
      isMobile: this.$q.platform.is.mobile ? true : false,
      visibility: false
    };
  },

  methods: {
    ...mapActions('moduleTask', ['login']),
    onSubmit(): void {
      this.login(this.form)
    },
    onReset() {
      this.form.email = '';
      this.form.pass = '';
    }
  }
});
</script>
<style lang="scss" scoped>
.login {
  min-height: 100vh;
  width: 50vh;
}
.form-login {
  min-width: 100%;
}

@media screen and (max-width: 550px){
  .login {
    width: 100%;
  }
}
</style>
