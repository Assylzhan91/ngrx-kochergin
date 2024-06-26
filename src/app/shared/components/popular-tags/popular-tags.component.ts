import {ChangeDetectionStrategy, Component, inject, OnInit, Signal} from '@angular/core'
import { CommonModule } from '@angular/common';
import { Store} from '@ngrx/store'

import { getPopularTags } from '@shared/components/popular-tags/store/popular-tags.actions'
import {
  isLoadingSelectI,
  popularTagsErrorSelect,
  popularTagsSelect
} from '@shared/components/popular-tags/store/popular-tags.selectors'
import {PopularTagType} from '@shared/types/popular-tag.type'
import {LoadingComponent} from '@shared/components/loading/loading.component'
import {ErrorMessageComponent} from '@shared/components/error-message/error-message.component'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'ngrx-popular-tags',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessageComponent, RouterLink],
  templateUrl: './popular-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
  store = inject(Store)

  popularTagsSelect: Signal<PopularTagType[] | null> = this.store.selectSignal(popularTagsSelect)
  popularTagsErrorSelect: Signal<string | null> = this.store.selectSignal(popularTagsErrorSelect)
  isLoadingSelect: Signal<boolean> = this.store.selectSignal(isLoadingSelectI)

  ngOnInit(): void {
    this.store.dispatch(getPopularTags())
  }
}
