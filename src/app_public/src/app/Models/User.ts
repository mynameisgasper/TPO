export interface UserLogin{
  email:string
  password:string
}
export interface UserRegister{
  name: string
  surname: string
  email: string
  phone: string
  address: string
  country: string
  password: string
  role: number
}
export class UserPublic{
  name: string
  surname: string
  phone: string
  address: string
  email: string
  rating: number
  comments: Comment[]
  description: string
}
export class User{
  id: string
  name: string
  surname: string
  phone: string
  address: string
  country: string
  email: string
  role: number
  rating: number
}

