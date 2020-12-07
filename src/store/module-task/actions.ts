import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StateTask } from './state';
import firebase from 'firebase';
import {Notify} from 'quasar';
import {IUser} from 'src/models/interface.models';

Notify.setDefaults({
  progress: true,
  position: 'top-right',
  classes: 'text-black',
  timeout: 3000
})

const actions: ActionTree<StateTask, StateInterface> = {
  onAuthStateChange ({dispatch, commit}) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit('setUser', {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified
        })
      } else {

      }
    })
  },

  login ({}, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.pass)
      .catch(console.log)
  },

  register ({dispatch}, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
      .then(() => {
        let user = firebase.auth().currentUser
        user?.sendEmailVerification()
        user?.updateProfile({
          displayName: `${payload.name} ${payload.lastName}`
        })
        dispatch('createUser', {
          id: user?.uid,
          name: payload.name,
          lastName: payload.lastName,
          email: payload.email
        })
        dispatch('logOut')
        Notify.create({
          type: 'positive',
          message: `GENIAL!`,
          caption: 'Ya puedes iniciar sesión'
        })
      })
  },

  logOut () {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // clean all
      })
      .catch(console.log)
  },

  recoverPassword ({}, payload) {
    firebase
      .auth()
      .sendPasswordResetEmail(payload.email)
      .then(() => {
        Notify.create({
          type: 'positive',
          message: `Revisa tu correo electronico por favor`
        })
      })
      .catch(console.log)
  },

  createUser ({}, payload: IUser) {
    firebase
      .database()
      .ref(`/users/${payload.id}`)
      .set({
        id: payload.id,
        name: payload.name,
        lastName: payload.lastName,
        email: payload.email
      })
      .then(() => {})
      .catch(console.log)
  }

};

export default actions;
