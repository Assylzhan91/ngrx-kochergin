import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthErrorResponseInterface} from '@shared/types/auth-error-response.interface'
import {AuthService} from '@auth/services/auth.service'
import {provideState} from '@ngrx/store'
import {authFeatureKey, authReducer} from '@auth/store/reducers/auth.reducer'

@Component({
  selector: 'ngrx-auth-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-error.component.html',
  styleUrl: './auth-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthErrorComponent implements OnInit {
  @Input() errors!: AuthErrorResponseInterface | null
  errorMessages: string[] = []

  ngOnInit(): void {
    if (this.errors) {
      this.errorMessages = Object.keys(this.errors).map((key) => {
        return `${key} ${this.errors![key]}`
      })
    }
  }
}
