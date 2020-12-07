import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StateTask } from './state';

const getters: GetterTree<StateTask, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
