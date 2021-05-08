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

