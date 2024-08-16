import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Store} from '@ngrx/store'

import {ArticleFormComponent} from '@shared/article-form/article-form.component'
import {isSubmittingSelector, validationErrorsSelector} from './store/selectors'
import {ArticleEditInputInterface} from '@shared/interfaces/article.interface'
import {createArticleAction} from './store/actions/create-article.action'
import {CreateArticleService} from './services/create-article.service'
import {PopularTagType} from '@shared/types/popular-tag.type'

@Component({
  selector: 'ngrx-create-article',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent],
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CreateArticleService],
})
export class CreateArticleComponent {
  store = inject(Store)
  isSubmittingSignal = this.store.selectSignal(isSubmittingSelector)
  validationErrorsSignal = this.store.selectSignal(validationErrorsSelector)

  initialValues: ArticleEditInputInterface<PopularTagType[]> = {
    tags: [],
    title: '',
    description: '',
    body: '',
  }

  onSubmit(articleInput: ArticleEditInputInterface<string>): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
