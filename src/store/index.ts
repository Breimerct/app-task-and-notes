import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import moduleTask from './module-task/index'

export interface StateInterface {
  example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      moduleTask
    },
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
