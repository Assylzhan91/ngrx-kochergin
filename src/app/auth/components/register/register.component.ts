import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {AsyncPipe, CommonModule} from '@angular/common'
import {catchError, EMPTY, Observable} from 'rxjs'
import {RouterLink} from '@angular/router'
import {select, Store} from '@ngrx/store'

import {registerAction} from '@auth/store/actions/register.action'
import {CurrentUserInterface} from '@shared/types/user.interface'
import {isSubmittingSelector} from '@auth/store/selectors'
import {AuthService} from '@auth/services/auth.service'
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  fb = inject(FormBuilder)
  store = inject(Store)
  authService = inject(AuthService)

  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector))
  isSubmittingSignal = this.store.selectSignal(isSubmittingSelector)

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit(): void {}

  onSubmit(): void {
    const user = this.form.value
    this.store.dispatch(registerAction({user}))
    this.authService
      .register(user)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          const {error} = err
          return EMPTY
        }),
      )
      .subscribe((currentUser: CurrentUserInterface) => {
        console.log('currentUser', currentUser)
      })
  }
}
