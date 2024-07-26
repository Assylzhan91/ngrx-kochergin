import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthErrorResponseInterface} from '@shared/interfaces/auth-error-response.interface'
import {ArticleEditInputInterface} from '@shared/interfaces/article.interface'

@Component({
  selector: 'ngrx-article-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFormComponent {
  @Input() initialValues!: ArticleEditInputInterface
  @Input() isSubmitting!: boolean
  @Input() errors!: AuthErrorResponseInterface | null
}
