import {BaseService} from '@shared/services/base.service'
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs'

import {PopularTagsInterface} from '@shared/interfaces/popular-tags.interface'
import {PopularTagType} from '@shared/types/popular-tag.type'

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService extends BaseService{

  getPopularTags(): Observable<PopularTagType[]>{
    return this.http
      .get<PopularTagsInterface>(`${this.baseURL}tags`)
      .pipe(map((response: PopularTagsInterface)=> response.tags))
  }
}
