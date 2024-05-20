import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'ngrx-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {}
