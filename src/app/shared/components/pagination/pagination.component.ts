import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'ngrx-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() total!: number | undefined
  @Input() limit?: number
  @Input() currentPage?: number
  @Input() url?: string
}
