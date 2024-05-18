import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {CurrentUserInterface} from '@shared/types/user.interface'

export interface AuthStateInterface {
  authErrorResponse: AuthErrorResponseInterface | null
  currentUser: CurrentUserInterface | null
  isSubmitting: boolean
  isLoggedIn: boolean | null
  isLoading: boolean
}
