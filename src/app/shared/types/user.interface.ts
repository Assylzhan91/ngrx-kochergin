import {FormControl} from '@angular/forms'

export interface CurrentUserInterface {
  id: number
  email: string
  username: string
  bio: string | null
  image: string
  token: string
}

export type UserTypes = Pick<CurrentUserInterface, 'email' | 'username'> & {password: string}

export type LoginTypes = Pick<UserTypes, 'email' | 'password'>

export interface LoginInterface {
  email: FormControl<string | null>
  password: FormControl<string | null>
}
