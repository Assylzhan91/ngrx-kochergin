import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngrx-create-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateArticleComponent {}
