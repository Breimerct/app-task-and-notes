import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import moduleLogin from './module-login/index'

export interface StateInterface {
  example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      moduleLogin
    },
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
