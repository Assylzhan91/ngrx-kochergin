import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ArticleFormComponent} from '@shared/article-form/article-form.component'

@Component({
  selector: 'ngrx-create-article',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent],
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateArticleComponent {
}
