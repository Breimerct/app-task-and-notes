interface IUser {
  id?: string,
  fullName?: string,
  name?: string,
  lastName?: string,
  email?: string,
  emailVerified?: boolean
}
interface ITask {
  id: number,
  nameTask: string,
  state: string
}

export {
  ITask,
  IUser
}
