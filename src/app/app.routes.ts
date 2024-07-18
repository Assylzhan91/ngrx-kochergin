import {provideEffects} from '@ngrx/effects'
import {provideState} from '@ngrx/store'
import {Routes} from '@angular/router'

import {feedFeatureKey, feedReducer} from '@shared/components/feed/store/reducers/feed.reducers'
import {articledReducer, articleFeatureKey} from './article/store/reducers/article.reducers'
import {authFeatureKey, authReducer} from '@auth/store/reducers/auth.reducer'
import {
  POPULAR_TAGS_FEATURE_KEY,
  popularTagsReducer,
} from '@shared/components/popular-tags/store/popular-tags.reducer'

import {RegisterComponent} from '@auth/components/register/register.component'
import {GlobalFeedComponent} from './global-feed/global-feed.component'
import {LoginComponent} from '@auth/components/login/login.component'
import {YourFeedComponent} from './your-feed/your-feed.component'
import {TagFeedComponent} from './tag-feed/tag-feed.component'
import {ArticleComponent} from './article/article.component'
import {AuthComponent} from '@auth/auth.component'
import {HomeComponent} from './home/home.component'

import {PopularTagsEffects} from '@shared/components/popular-tags/store/popular-tags.effects'
import {GetFeedEffect} from '@shared/components/feed/store/effects/get-feed.effect'
import {GetArticleEffect} from './article/store/effects/get-article.effect'
import {RegisterEffect} from '@auth/store/effects/register.effect'
import {LoginEffect} from '@auth/store/effects/login.effect'

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
  {
    path: 'articles/:slug',
    component: ArticleComponent,
    providers: [
      provideState({name: articleFeatureKey, reducer: articledReducer}),
      provideEffects([GetArticleEffect]),
    ],
  },
]
