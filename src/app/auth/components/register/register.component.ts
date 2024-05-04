import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'ngrx-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  fb = inject(FormBuilder)

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
  }
}