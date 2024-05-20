import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {environment} from '@environments'

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  http = inject(HttpClient)
  baseURL = environment.baseUrl
}
