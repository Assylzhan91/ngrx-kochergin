import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {AsyncPipe, CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {registerAction} from '@auth/store/actions/register.action'
import {isSubmittingSelector} from '@auth/store/selectors'

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

  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector))
  isSubmittingSignal = this.store.selectSignal(isSubmittingSelector)

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit(): void {}

  onSubmit(): void {
    const request = this.form.value
    this.store.dispatch(registerAction({request}))
  }
}
