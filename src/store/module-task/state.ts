import {ITask, IUser} from 'src/models/interface.models';

export interface StateTask {
  tasks: ITask[],
  user: IUser
}

const state: StateTask = {
  tasks: [],
  user: {}
};

export default state;
