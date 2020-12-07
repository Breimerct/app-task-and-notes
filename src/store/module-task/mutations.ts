import { MutationTree } from 'vuex';
import { StateTask } from './state';
import {IUser} from 'src/models/interface.models';

const mutation: MutationTree<StateTask> = {
  setUser: (state, payload:IUser) => {
    state.user = payload
  }
};

export default mutation;
