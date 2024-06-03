import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'ngrx-loading',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Loading...</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
