export interface CurrentUserInterface {
  id: number
  email: string
  username: string
  bio: string | null
  image: string
  token: string
}

export type UserTypes = Pick<CurrentUserInterface, 'email' | 'username'> & {password: string}
