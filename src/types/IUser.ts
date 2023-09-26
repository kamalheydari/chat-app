export default interface IUser {
  firstName: string
  lastName: string
  about?: string
  avatar?: string
  email: string
  password?: string
  createdAt: Date
  updatedAt?: Date
  friends?: IUser[]
  socket_id?: string
  status: 'Online' | 'Offline'
  _id:string
}
