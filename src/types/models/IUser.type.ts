export default interface IUser {
  _id: string
  isAdmin: boolean
  firstName: string
  lastName: string
  email: string
  password?: string
  createdAt: Date
  updatedAt?: Date
}
