import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction ({state}) {
    console.log('sdf', state.prop + name)
  }
};

export default actions;
