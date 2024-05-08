import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  setToken<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('error', error)
    }
  }

  getToken<T>(key: string): T | null {
    try {
      return JSON.parse(localStorage.getItem(key)!)
    } catch (error) {
      console.error('error is getting data from localStorage', error)
      return null
    }
  }
}
