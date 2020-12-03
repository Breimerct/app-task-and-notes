import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { LoginState } from './state';

const getters: GetterTree<LoginState, StateInterface> = {
  getUser (state) {
    return state.user
  }
};

export default getters;
