import {CommonModule} from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core'

import {ErrorMessageComponent} from '@shared/components/error-message/error-message.component'
import {BackendErrorsResponseInterface} from '@shared/interfaces/auth-error-response.interface'
import {ArticleEditInputInterface} from '@shared/interfaces/article.interface'
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {PopularTagType} from '@shared/types/popular-tag.type'

@Component({
  selector: 'ngrx-article-form',
  standalone: true,
  imports: [CommonModule, ErrorMessageComponent, ReactiveFormsModule],
  templateUrl: './article-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleFormComponent implements OnInit {
  fb = inject(FormBuilder)

  @Input() initialValues!: ArticleEditInputInterface<PopularTagType[]>
  @Input() errors!: BackendErrorsResponseInterface | null
  @Input() isSubmitting!: boolean

  @Output() articleSubmitEvent = new EventEmitter<ArticleEditInputInterface<string>>()

  form!: FormGroup

  ngOnInit(): void {
    this.form = this.fb.group<ArticleEditInputInterface<string>>({
      title: this.initialValues?.title,
      body: this.initialValues?.body,
      description: this.initialValues?.description,
      tags: this.initialValues?.tags.join(' '),
    })
  }
}
