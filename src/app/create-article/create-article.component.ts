import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ArticleFormComponent} from '@shared/article-form/article-form.component'
import {ArticleEditInputInterface} from '@shared/interfaces/article.interface'
import {PopularTagType} from '@shared/types/popular-tag.type'
import {Store} from '@ngrx/store'

@Component({
  selector: 'ngrx-create-article',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent],
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent {
  store = inject(Store)

  initialValues: ArticleEditInputInterface<PopularTagType[]> = {
    tagList: ['title1', 'title2'],
    title: 'title',
    description: 'description',
    body: 'body',
  }

  onSubmit(form: ArticleEditInputInterface<string>): void {
    console.log('form', form)
  }
}
