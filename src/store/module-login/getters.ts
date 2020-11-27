import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { LoginState } from './state';

const getters: GetterTree<LoginState, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
