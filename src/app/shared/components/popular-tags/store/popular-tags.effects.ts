import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import {switchMap, catchError, of, map} from 'rxjs'

import {getPopularTags, getPopularTagsFailure, getPopularTagsSuccess} from './popular-tags.actions'
import {PopularTagsService} from '@shared/services/popular-tags.service'
import {PopularTagType} from '@shared/types/popular-tag.type'
import {HttpErrorResponse} from '@angular/common/http'

@Injectable()
export class PopularTagsEffects {
  private actions$ = inject(Actions);
  private popularTagsService = inject(PopularTagsService);

  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTags),
    switchMap(() => this.popularTagsService.getPopularTags()),
    map((popularTags: PopularTagType[])=> getPopularTagsSuccess({ popularTags })),
    catchError((error: HttpErrorResponse) => of(getPopularTagsFailure({ error: error.message })))
  ));
}
