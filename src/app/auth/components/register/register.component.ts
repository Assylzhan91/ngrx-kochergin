import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common'
import {RouterLink} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {
  authErrorResponseSelector,
  isLoggedInSelector,
  isSubmittingSelector,
} from '@auth/store/selectors'
import {AuthErrorComponent} from '@shared/components/auth-error/auth-error.component'
import {registerAction} from '@auth/store/actions/register.action'

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, AsyncPipe, JsonPipe, AuthErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  fb = inject(FormBuilder)
  store = inject(Store)

  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector))
  isLoggedIn$: Observable<boolean | null> = this.store.pipe(select(isLoggedInSelector))
  authErrorResponse$: Observable<AuthErrorResponseInterface | null> = this.store.pipe(
    select(authErrorResponseSelector),
  )
  isSubmittingSignal = this.store.selectSignal(isSubmittingSelector)

  form: FormGroup = this.fb.group({
    username: ['frgthygfwerthyrethygre', Validators.required],
    email: ['fgdfhsdrgthy12f@ffghtrhr.dasd', Validators.required],
    password: ['sdfghjtrewtytujhtgrf4546f!±34', Validators.required],
  })

  ngOnInit(): void {}

  onSubmit(): void {
    const request = this.form.value
    this.store.dispatch(registerAction({request}))
  }
}
