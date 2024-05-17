import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {AsyncPipe, CommonModule, NgOptimizedImage} from '@angular/common'
import {RouterLink} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from '@auth/store/selectors'

@Component({
  selector: 'ngrx-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, AsyncPipe],
  templateUrl: './top-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class TopBarComponent {
  store = inject(Store)

  isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
  currentUser$ = this.store.pipe(select(currentUserSelector))
  isLoggedIn$: Observable<boolean | null> = this.store.select(isLoggedInSelector)
}
