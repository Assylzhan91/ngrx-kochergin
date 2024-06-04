import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  Input,
  NgZone,
  OnInit,
} from '@angular/core'
import {UtilsService} from '@shared/services/utils.service'
import {CommonModule} from '@angular/common'
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'

@Component({
  selector: 'ngrx-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  utilsService = inject(UtilsService)
  destroyRef = inject(DestroyRef)
  cdr = inject(ChangeDetectorRef)
  router = inject(Router)
  zone = inject(NgZone)

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

  changePage(page: number) {
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params: Params) => {
        this.currentPage = +(params as {currentPage: string}).currentPage || 1
        if (isNaN(this.currentPage)) {
          throw new Error('Error is maybe NAN or url incorrect')
        }
      })
  }
}
