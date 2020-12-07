import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StateTask } from './state';

const getters: GetterTree<StateTask, StateInterface> = {

  getUser: state => {
    return state.user
  },

  getTasks: state => {
    return state.tasks
  }

};

export default getters;
