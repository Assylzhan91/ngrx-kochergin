import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {CurrentUserInterface} from '@shared/types/user.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  authErrorResponse: AuthErrorResponseInterface | null
}
