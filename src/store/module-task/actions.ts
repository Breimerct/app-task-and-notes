import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StateTask } from './state';
import firebase from 'firebase';
import {Notify} from 'quasar';
import {ITask, IUser} from 'src/models/interface.models';

Notify.setDefaults({
  progress: true,
  position: 'top',
  classes: 'text-black',
  timeout: 2000
})

const actions: ActionTree<StateTask, StateInterface> = {
  onAuthStateChange ({dispatch, commit}) {
    firebase.auth().onAuthStateChanged(user => {
      const userAuth = user?.displayName?.split(' ') || ''
      if (user) {
        commit('setUser', {
          id: user.uid,
          fullName: user.displayName,
          name: userAuth[0],
          lastName: userAuth[1],
          email: user.email,
          emailVerified: user.emailVerified
        })
        dispatch('getFirebaseTasks')
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
      .then(() => {
        Notify.create({
          type: 'positive',
          message: `GENIAL!`,
          caption: 'Ya puedes iniciar sesión'
        })
      })
      .catch(console.log)
  },

  saveTasks ({state}, payload: ITask) {
    firebase
      .database()
      .ref(`/tasks/${state.user.id}/${payload.id}`)
      .set({
        id: payload.id,
        name: payload.nameTask,
        state: false
      })
      .then(() => {
        Notify.create({
          message: 'Tarea guardada',
          type: 'positive'
        })
      })
      .catch(console.log)
  },

  getFirebaseTasks ({commit, state}) {
    firebase.database().ref(`/tasks/${state.user.id}`)
      .on('value', snapshot => {
        commit('setTasks', snapshot.val())
      })
  },

  deleteTasks ({state}, payload) {
    firebase
      .database()
      .ref(`/tasks/${state.user.id}/${payload.id}`)
      .remove()
      .then(() => {
        Notify.create({
          type: 'info',
          message: `Tarea eliminada`
        })
      })
      .catch(console.log)
  },

  updateTasks ({state}, payload) {
    firebase
      .database()
      .ref(`/tasks/${state.user.id}/${payload.id}`)
      .update(payload.update)
      .then(() => {
        Notify.create({
          type: 'info',
          message: `Tarea realizada`
        })
      })
      .catch(console.log)
  }

};

export default actions;
