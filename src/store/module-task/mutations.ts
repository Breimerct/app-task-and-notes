import { MutationTree } from 'vuex';
import { StateTask } from './state';
import {ITask, IUser} from 'src/models/interface.models';

const mutation: MutationTree<StateTask> = {

  setUser: (state, payload:IUser) => {
    state.user = payload
  },

  setTasks: (state, payload: ITask[]) => {
    state.tasks = payload
  }

};

export default mutation;
