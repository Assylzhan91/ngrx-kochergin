import {ChangeDetectionStrategy, Component, inject, Input, Signal} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Store} from '@ngrx/store'
import {isLoggedInSelector} from '@auth/store/selectors'
import {RouterLink, RouterLinkActive} from '@angular/router'
import {LoadingComponent} from '@shared/components/loading/loading.component'

@Component({
  selector: 'ngrx-feed-toggle',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LoadingComponent],
  templateUrl: './feed-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedToggleComponent {
  store = inject(Store)

  @Input() tagName?: string

  isLoggedInSignal: Signal<boolean | null> = this.store.selectSignal(isLoggedInSelector)
}
