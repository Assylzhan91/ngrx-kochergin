import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'

import {FeedComponent} from '@shared/components/feed/feed.component'
import {BannerComponent} from '@shared/components/banner/banner.component'

@Component({
  selector: 'ngrx-global-feed',
  standalone: true,
  imports: [CommonModule, FeedComponent, RouterOutlet, BannerComponent],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent {
  apiUrl = 'articles'
}
