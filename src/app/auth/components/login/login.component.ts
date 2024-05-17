import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common'
import {RouterLink} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {
  authErrorResponseSelector,
  isAnonymousSelector,
  isLoggedInSelector,
  isSubmittingSelector,
} from '@auth/store/selectors'
import {AuthErrorComponent} from '@shared/components/auth-error/auth-error.component'
import {loginAction} from '@auth/store/actions/login.action'
import {LoginInterface} from '@shared/types/user.interface'

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, AsyncPipe, JsonPipe, AuthErrorComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder)
  store = inject(Store)

  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector))
  isLoggedIn$: Observable<boolean | null> = this.store.pipe(select(isLoggedInSelector))
  isAnonymousSelector$: Observable<boolean | null> = this.store.pipe(select(isAnonymousSelector))
  authErrorResponse$: Observable<AuthErrorResponseInterface | null> = this.store.pipe(
    select(authErrorResponseSelector),
  )
  isSubmittingSignal = this.store.selectSignal(isSubmittingSelector)

  form: FormGroup = this.fb.group<LoginInterface>({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  })

  ngOnInit(): void {}

  onSubmit(): void {
    const request = this.form.value
    this.store.dispatch(loginAction({request}))
  }
}
