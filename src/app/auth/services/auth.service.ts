import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'

import {RegisterRequestInterface} from '@auth/types/register-request.interface'
import {AuthResponseInterface} from '@auth/types/auth-response.interface'
import {LoginRequestInterface} from '@auth/types/login-request.interface'
import {CurrentUserInterface} from '@shared/interfaces/user.interface'
import {environment} from '@environments'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)
  baseURL = environment.baseUrl

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${this.baseURL}users`, {user: data})
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${this.baseURL}users/login`, {user: data})
      .pipe(map(this.getUser))
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get<AuthResponseInterface>(`${this.baseURL}user`).pipe(map(this.getUser))
  }
}
