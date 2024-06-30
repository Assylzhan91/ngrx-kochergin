import {provideEffects} from '@ngrx/effects'
import {provideState} from '@ngrx/store'
import {Routes} from '@angular/router'

import {feedFeatureKey, feedReducer} from '@shared/components/feed/store/reducers/feed.reducers'
import {GetFeedEffect} from '@shared/components/feed/store/effects/get-feed.effect'
import {RegisterComponent} from '@auth/components/register/register.component'
import {authFeatureKey, authReducer} from '@auth/store/reducers/auth.reducer'
import {GlobalFeedComponent} from './global-feed/global-feed.component'
import {LoginComponent} from '@auth/components/login/login.component'
import {RegisterEffect} from '@auth/store/effects/register.effect'
import {LoginEffect} from '@auth/store/effects/login.effect'
import {HomeComponent} from './home/home.component'
import {AuthComponent} from '@auth/auth.component'
import {PopularTagsEffects} from '@shared/components/popular-tags/store/popular-tags.effects'
import {
  POPULAR_TAGS_FEATURE_KEY,
  popularTagsReducer,
} from '@shared/components/popular-tags/store/popular-tags.reducer'
import {YourFeedComponent} from './your-feed/your-feed.component'
import {TagFeedComponent} from './tag-feed/tag-feed.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: GlobalFeedComponent,
    providers: [
      provideState({name: feedFeatureKey, reducer: feedReducer}),
      provideState({name: POPULAR_TAGS_FEATURE_KEY, reducer: popularTagsReducer}),
      provideEffects([GetFeedEffect, PopularTagsEffects]),
    ],
  },
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
    providers: [
      provideState({name: feedFeatureKey, reducer: feedReducer}),
      provideState({name: POPULAR_TAGS_FEATURE_KEY, reducer: popularTagsReducer}),
      provideEffects([GetFeedEffect, PopularTagsEffects]),
    ],
  },
  {
    path: 'feed',
    component: YourFeedComponent,
    providers: [
      provideState({name: feedFeatureKey, reducer: feedReducer}),
      provideState({name: POPULAR_TAGS_FEATURE_KEY, reducer: popularTagsReducer}),
      provideEffects([GetFeedEffect, PopularTagsEffects]),
    ],
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
    providers: [
      provideState({name: authFeatureKey, reducer: authReducer}),
      provideEffects([RegisterEffect, LoginEffect]),
    ],
  },
]
