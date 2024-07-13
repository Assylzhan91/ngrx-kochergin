import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'

@Component({
  selector: 'ngrx-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  ngOnInit(): void {}
}
