import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {CommonModule, JsonPipe} from '@angular/common'

import {PopularTagType} from '@shared/types/popular-tag.type'

@Component({
  selector: 'ngrx-tag-list',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent {
  @Input() tags!: PopularTagType[]
}
