import { MutationTree } from 'vuex';
import { LoginState } from './state';

interface User {
  email?: string,
  name?: string,
  verified?: boolean,
  isAnonymous?: boolean
}

const mutation: MutationTree<LoginState> = {
  setUser (state, payload: User) {
    state.user = payload
  }
};

export default mutation;
