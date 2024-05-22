import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'ngrx-error-message',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './error-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div>{{ message }}</div> `,
})
export class ErrorMessageComponent {
  @Input() message: string = 'Something went wrong'
}
