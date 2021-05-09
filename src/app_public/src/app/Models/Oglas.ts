export interface OglasCreate{
  name: string
  description: string
  location: string
  price?: number
  picutre?: string
}
export interface OglasUpdate{
  name?: string
  description?: string
  location?: string
  price?: number
  picutre?: string
}
export class Oglas{
  _id: string
  creator: string
  owner: string
  name: string
  description: string
  price: number
  location: string
  picture: string
}
