import {AuthErrorResponseInterface} from '@shared/interfaces/auth-error-response.interface'
import {CurrentUserInterface} from '@shared/interfaces/user.interface'

export interface AuthStateInterface {
  authErrorResponse: AuthErrorResponseInterface | null
  currentUser: CurrentUserInterface | null
  isSubmitting: boolean
  isLoggedIn: boolean | null
  isLoading: boolean
}
