import {BackendErrorsResponseInterface} from '@shared/interfaces/auth-error-response.interface'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsResponseInterface | null
}
