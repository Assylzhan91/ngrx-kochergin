import {ChangeDetectionStrategy, Component, inject, OnInit, Signal} from '@angular/core'
import {AsyncPipe, NgOptimizedImage} from '@angular/common'
import {ActivatedRoute, RouterLink} from '@angular/router'
import {combineLatest, map, Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'

import {ErrorMessageComponent} from '@shared/components/error-message/error-message.component'
import {articleSelector, errorSelector, isLoadingSelector} from './store/selectors'
import {TagListComponent} from '@shared/components/tag-list/tag-list.component'
import {LoadingComponent} from '@shared/components/loading/loading.component'
import {ArticleInterface} from '@shared/interfaces/article.interface'
import {getArticleAction} from './store/actions/get-article.action'
import {currentUserSelector} from '@auth/store/selectors'

@Component({
  selector: 'ngrx-article',
  standalone: true,
  imports: [
    ErrorMessageComponent,
    NgOptimizedImage,
    TagListComponent,
    LoadingComponent,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  store = inject(Store)

  isLoadingSignal: Signal<boolean> = this.store.selectSignal(isLoadingSelector)
  articleSignal: Signal<ArticleInterface | null> = this.store.selectSignal(articleSelector)
  errorSignal: Signal<string | null> = this.store.selectSignal(errorSelector)

  isAuthorSignal$: Observable<boolean> = combineLatest([
    this.store.pipe(select(articleSelector)),
    this.store.pipe(select(currentUserSelector)),
  ]).pipe(
    map(([articleSelector, currentUserSelector]) => {
      if (!articleSelector || !currentUserSelector) {
        return false
      }
      return articleSelector.author.username === currentUserSelector.username
    }),
  )

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    let slug = this.activatedRoute.snapshot.params['slug']
    this.store.dispatch(getArticleAction({slug}))
  }
}
