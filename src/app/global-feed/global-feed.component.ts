import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from '@shared/components/feed/feed.component'

@Component({
  selector: 'ngrx-global-feed',
  standalone: true,
  imports: [CommonModule, FeedComponent],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent {}
