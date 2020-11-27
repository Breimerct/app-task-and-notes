import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { LoginState } from './state';

const actions: ActionTree<LoginState, StateInterface> = {
  someAction ({state}) {
    console.log('sdf', state.prop)
  }
};

export default actions;
