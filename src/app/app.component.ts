import {Component, inject, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'

import {getCurrentUserAction} from '@auth/store/actions/get-current-user.action'
import {TopBarComponent} from '@shared/components/top-bar/top-bar.component'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  providers: [],
})
export class AppComponent implements OnInit {
  store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}

// userName - asylzhan2491bai
// email - asylzhan2491bai.asylzhan.com
// password - asylzhan2491bai.asylzhan.comasylzhan2491bai.asylzhan.com
