import {RouterOutlet} from '@angular/router'
import {Component} from '@angular/core'

import {TopBarComponent} from '@shared/components/top-bar/top-bar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {}

// userName - asylzhan2491bai
// email - asylzhan2491bai.asylzhan.com
// password - asylzhan2491bai.asylzhan.comasylzhan2491bai.asylzhan.com
