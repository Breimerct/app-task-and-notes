import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

export interface StateInterface {
  example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      // example
    },
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
