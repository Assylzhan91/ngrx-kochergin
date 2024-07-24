import {CanActivateFn, Router} from '@angular/router'
import {inject} from '@angular/core'

export const articleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const slug = route.paramMap.get('slug')
  console.log('slug', slug)
  if (slug === 'new') {
    router.navigate(['articles/new'])
    return false
  }
  return true
}
