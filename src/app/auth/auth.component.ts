import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'

import {RegisterComponent} from '@auth/register/register.component'

@Component({
  selector: 'ngrx-auth',
  standalone: true,
  imports: [RegisterComponent, CommonModule, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
