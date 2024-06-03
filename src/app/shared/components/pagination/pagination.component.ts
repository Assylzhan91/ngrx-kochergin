import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core'
import {UtilsService} from '@shared/services/utils.service'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'ngrx-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  utilsService = inject(UtilsService)

  @Input() total!: number
  @Input() limit!: number
  @Input() currentPage?: number
  @Input() url?: string

  pagesCount!: number
  pages!: number[]

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
