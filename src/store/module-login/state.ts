export interface LoginState {
  user:{
    email?: string,
    name?: string,
    verified?: boolean,
    isAnonymous?: boolean
  }
}

const state: LoginState = {
  user: {}
};

export default state;
