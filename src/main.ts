import {bootstrapApplication} from '@angular/platform-browser'

import {appConfig} from './app/app.config'
import {AppComponent} from './app/app.component'

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err))


/*function twoSum(nums: number[], target: number): number[] {
  let res: number[] = []
  nums.forEach((num, i) => {
    nums.forEach((nestedNum, idx) => {
      if (!(idx === i) && nestedNum === (target - num)) {
        res = [idx, i]
      }
    })
  })
  return res
}

function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()
  console.log('numMap', numMap)
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i]
    }
    numMap.set(nums[i], i)
  }

  throw new Error('No two sum solution')
}
*/

/*
sadfdghj
sadfdghj@dfvg.com
qwertyuO
 */

