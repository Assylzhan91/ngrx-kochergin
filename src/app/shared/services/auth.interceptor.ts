import {HttpInterceptorFn} from '@angular/common/http'
import {inject} from '@angular/core'
import {PersistenceService} from '@shared/services/persistence.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const persistenceService = inject(PersistenceService)
  const userToken = persistenceService.getToken<string>('accessToken')
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Token ${userToken}`,
    },
  })
  return next(modifiedReq)
}
