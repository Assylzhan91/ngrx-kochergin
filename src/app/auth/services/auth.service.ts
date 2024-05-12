import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'

import {RegisterRequestInterface} from '@auth/types/register-request.interface'
import {AuthResponseInterface} from '@auth/types/auth-response.interface'
import {LoginRequestInterface} from '@auth/types/login-request.interface'
import {CurrentUserInterface} from '@shared/types/user.interface'
import {environment} from '@environments'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.baseUrl}users`, {user: data})
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.baseUrl}users/login`, {user: data})
      .pipe(map(this.getUser))
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }
}
